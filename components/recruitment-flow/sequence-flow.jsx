'use client'

import { useState } from 'react'
import { useRecruitment } from "./recruitment-context"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ArrowRight, FileText, Upload, UserPlus, CheckCircle, Mail, Users, FileCheck, UserCheck, Building } from 'lucide-react'
import { SequenceStep } from "./sequence-step"

export function SequenceFlow() {
  const { recruitmentData, moveToNextStep, addNotification, updateRecruitmentData, STEPS } = useRecruitment()
  const [activeStep, setActiveStep] = useState(recruitmentData.currentStep)

  const sequence = [
    {
      step: STEPS.JOB_POSTING,
      label: 'Create Job Posting',
      icon: FileText,
      role: 'Recruiter',
      module: 'e-recruitment'
    },
    {
      step: STEPS.JOB_POSTING,
      label: 'Publish Job',
      icon: Upload,
      role: 'Recruiter',
      module: 'e-recruitment'
    },
    {
      step: STEPS.CANDIDATE_PROFILE,
      label: 'Submit Application',
      icon: UserPlus,
      role: 'Candidate',
      module: 'e-recruitment'
    },
    {
      step: STEPS.CANDIDATE_PROFILE,
      label: 'New Application',
      icon: Mail,
      role: 'System',
      module: 'e-recruitment'
    },
    {
      step: STEPS.CANDIDATE_PROFILE,
      label: 'Screen & Shortlist',
      icon: Users,
      role: 'Recruiter',
      module: 'e-recruitment'
    },
    {
      step: STEPS.OFFER_MANAGEMENT,
      label: 'Generate Offer',
      icon: FileCheck,
      role: 'Recruiter',
      module: 'e-recruitment'
    },
    {
      step: STEPS.OFFER_MANAGEMENT,
      label: 'Accept Offer',
      icon: CheckCircle,
      role: 'Candidate',
      module: 'e-recruitment'
    }
  ]

  const handleStepAction = (action) => {
    const currentStepInfo = sequence.find(s => s.step === activeStep)
    
    if (action === 'previous') {
      const currentIndex = sequence.findIndex(s => s.step === activeStep)
      if (currentIndex > 0) {
        setActiveStep(sequence[currentIndex - 1].step)
      }
      return
    }

    // Handle step-specific actions
    switch (activeStep) {
      case STEPS.JOB_POSTING:
        if (action === 'create') {
          addNotification('Job posting created', 'success')
        } else if (action === 'publish') {
          addNotification('Job published successfully', 'success')
        }
        break
      case STEPS.CANDIDATE_PROFILE:
        if (action === 'submit') {
          addNotification('Application submitted', 'success')
        } else if (action === 'shortlist') {
          addNotification('Candidate shortlisted', 'success')
        } else if (action === 'reject') {
          addNotification('Candidate rejected', 'info')
          return // Don't proceed if rejected
        }
        break
      case STEPS.OFFER_MANAGEMENT:
        if (action === 'generate') {
          addNotification('Offer generated', 'success')
        } else if (action === 'accept') {
          addNotification('Offer accepted', 'success')
        } else if (action === 'decline') {
          addNotification('Offer declined', 'info')
          return // Don't proceed if declined
        }
        break
    }

    // Move to next step if available
    const currentIndex = sequence.findIndex(s => s.step === activeStep)
    if (currentIndex < sequence.length - 1) {
      setActiveStep(sequence[currentIndex + 1].step)
    }
  }

  return (
    <div className="space-y-6">
      <ScrollArea className="w-full">
        <div className="flex items-center space-x-4 pb-4">
          {sequence.map((item, index) => (
            <div key={`${item.step || 'unknown'}-${index}`} className="flex items-center">
              <Card 
                className={`p-4 cursor-pointer hover:border-primary transition-colors ${
                  activeStep === item.step ? 'border-primary' : 
                  recruitmentData.completedSteps.includes(item.step) ? 'bg-muted' : ''
                }`}
                onClick={() => item.step && setActiveStep(item.step)}
              >
                <div className="flex flex-col items-center space-y-2">
                  {item.icon && <item.icon className={`h-6 w-6 ${
                    recruitmentData.completedSteps.includes(item.step) ? 'text-primary' : ''
                  }`} />}
                  <div className="text-sm font-medium">{item.label || 'Unknown Step'}</div>
                  <Badge variant="secondary" className="text-xs">
                    {item.role || 'Unknown Role'}
                  </Badge>
                </div>
              </Card>
              {index < sequence.length - 1 && (
                <ArrowRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      {/* Active Step Details */}
      <SequenceStep 
        step={sequence.find(s => s.step === activeStep)} 
        onAction={handleStepAction}
      />
    </div>
  )
}

