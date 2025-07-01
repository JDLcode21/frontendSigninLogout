'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { useRecruitment } from "./recruitment-context"
import { FormFields } from "./form-fields"

export function SequenceStep({ step, onAction }) {
  const { recruitmentData, STEPS } = useRecruitment()

  // Return early if step is undefined
  if (!step?.label) return null

  const getActionButton = () => {
    // Ensure step.step exists before comparison
    if (!step.step) return null

    switch (step.step) {
      case STEPS.JOB_POSTING:
        return step.label === 'Create Job Posting' ? (
          <Button onClick={() => onAction('create')}>
            Create Job Posting
          </Button>
        ) : (
          <Button onClick={() => onAction('publish')}>
            Publish Job
          </Button>
        )
      case STEPS.CANDIDATE_PROFILE:
        switch (step.label) {
          case 'Submit Application':
            return (
              <Button onClick={() => onAction('submit')}>
                Submit Application
              </Button>
            )
          case 'Screen & Shortlist':
            return (
              <div className="space-x-2">
                <Button variant="outline" onClick={() => onAction('reject')}>
                  Reject
                </Button>
                <Button onClick={() => onAction('shortlist')}>
                  Shortlist
                </Button>
              </div>
            )
          default:
            return null
        }
      case STEPS.OFFER_MANAGEMENT:
        return step.label === 'Generate Offer' ? (
          <Button onClick={() => onAction('generate')}>
            Generate Offer
          </Button>
        ) : (
          <div className="space-x-2">
            <Button variant="outline" onClick={() => onAction('decline')}>
              Decline
            </Button>
            <Button onClick={() => onAction('accept')}>
              Accept Offer
            </Button>
          </div>
        )
      default:
        return null
    }
  }

  if (!step) return null

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold">{step.label}</h3>
              <div className="flex items-center space-x-2">
                <Badge variant="outline">{step.role || 'Unknown Role'}</Badge>
                <Badge variant="secondary">{step.module || 'Unknown Module'}</Badge>
              </div>
            </div>
            {step.icon && <step.icon className="h-8 w-8 text-muted-foreground" />}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between pt-4 border-t">
              <Button
                variant="outline"
                onClick={() => onAction('previous')}
                disabled={!recruitmentData.completedSteps.length}
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous Step
              </Button>
              {getActionButton()}
            </div>
          </div>
        </div>
      </Card>

      <FormFields />
    </div>
  )
}

