'use client'

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { PersonalDataForm } from "./forms/personal-data-form"
import { ContractDetailsForm } from "./forms/contract-details-form"
import { BankInformationForm } from "./forms/bank-information-form"
import { DocumentUploadForm } from "./forms/document-upload-form"

const steps = [
  {
    id: 'personal',
    title: 'Personal Information',
    description: 'Basic personal details',
    component: PersonalDataForm
  },
  {
    id: 'contract',
    title: 'Contract Details',
    description: 'Employment contract information',
    component: ContractDetailsForm
  },
  {
    id: 'bank',
    title: 'Bank Information',
    description: 'Banking and payment details',
    component: BankInformationForm
  },
  {
    id: 'documents',
    title: 'Document Upload',
    description: 'Required documentation',
    component: DocumentUploadForm
  }
]

export function OnboardingWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})

  const progress = ((currentStep + 1) / steps.length) * 100
  const CurrentStepComponent = steps[currentStep].component

  const handleStepComplete = (stepData) => {
    setFormData(prev => ({ ...prev, [steps[currentStep].id]: stepData }))
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      console.log('Onboarding completed:', formData)
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Step {currentStep + 1} of {steps.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
      </div>

      <nav aria-label="Progress" className="hidden md:block">
        <ol role="list" className="flex items-center justify-between">
          {steps.map((step, index) => (
            <li key={step.id} className="flex-1">
              <div className="group relative flex items-center justify-center">
                <span className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-medium
                  ${index <= currentStep 
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted-foreground/20 bg-background"
                  }`}
                >
                  {index + 1}
                </span>
                <span className="absolute -bottom-6 w-32 text-center text-sm">
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`absolute left-[50%] h-[2px] w-full
                    ${index < currentStep 
                      ? "bg-primary"
                      : "bg-muted-foreground/20"
                    }`}
                  />
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">
              {steps[currentStep].title}
            </h2>
            <p className="text-muted-foreground">
              {steps[currentStep].description}
            </p>
          </div>

          <CurrentStepComponent onComplete={handleStepComplete} />
        </div>
      </Card>
    </div>
  )
}

