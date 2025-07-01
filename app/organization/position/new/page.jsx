'use client'

import { useState } from 'react'
import { useStepForm } from "@/contexts/step-form-context"
import { PositionDetailsForm } from "@/components/organization/forms/position-details-form"
import { PositionRequirementsForm } from "@/components/organization/forms/position-requirements-form"
import { PositionValidationForm } from "@/components/organization/forms/position-validation-form"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"

const steps = [
  {
    title: "Position Details",
    component: PositionDetailsForm,
  },
  {
    title: "Requirements & Skills",
    component: PositionRequirementsForm,
  },
  {
    title: "Review & Validate",
    component: PositionValidationForm,
  },
]

export default function NewPositionPage() {
  const router = useRouter()
  const { currentStep, nextStep, previousStep, isStepComplete, formData, saveFormData } = useStepForm()
  
  const CurrentStepComponent = steps[currentStep]?.component

  const handleSave = async (data) => {
    saveFormData(currentStep, data)
    if (currentStep < steps.length - 1) {
      nextStep()
    } else {
      // Handle form completion
      console.log('Form completed:', formData)
      router.push('/organization')
    }
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Create New Position</h2>
      </div>
      
      <div className="mx-auto max-w-3xl">
        <Card className="p-6">
          <div className="space-y-6">
            {CurrentStepComponent && (
              <CurrentStepComponent
                data={formData[currentStep]}
                onSave={handleSave}
              />
            )}
            
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={previousStep}
                disabled={currentStep === 0}
              >
                Previous
              </Button>
              <div className="space-x-2">
                <Button
                  variant="outline"
                  onClick={() => router.push('/organization')}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

