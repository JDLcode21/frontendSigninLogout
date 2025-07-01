'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useStepForm } from "@/contexts/step-form-context"
import { CheckCircle } from 'lucide-react'

export function ModalForm({ open, onOpenChange, title, steps }) {
  const {
    currentStep,
    nextStep,
    previousStep,
    isStepComplete,
    formData,
    saveFormData,
  } = useStepForm()

  const CurrentStepComponent = steps[currentStep]?.component
  const progress = ((currentStep + 1) / steps.length) * 100

  const handleSave = async (data) => {
    saveFormData(currentStep, data)
    if (currentStep < steps.length - 1) {
      nextStep()
    } else {
      // Here we would typically make an API call to save the complete form data
      console.log('Form completed:', formData)
      onOpenChange(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Step {currentStep + 1} of {steps.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
          </div>

          <div className="flex space-x-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex items-center space-x-2"
              >
                <div
                  className={`rounded-full w-8 h-8 flex items-center justify-center border-2 
                    ${index === currentStep 
                      ? 'border-primary bg-primary text-primary-foreground'
                      : isStepComplete(index)
                        ? 'border-primary bg-primary/20'
                        : 'border-muted'
                    }`}
                >
                  {isStepComplete(index) ? <CheckCircle className="h-4 w-4" /> : index + 1}
                </div>
                <span className="text-sm font-medium">{step.title}</span>
                {index < steps.length - 1 && (
                  <div className="w-8 h-px bg-muted" />
                )}
              </div>
            ))}
          </div>

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
                onClick={() => onOpenChange(false)}
              >
                Save & Exit
              </Button>
              {currentStep < steps.length - 1 ? (
                <Button
                  onClick={() => nextStep()}
                  disabled={!isStepComplete(currentStep)}
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={() => handleSave(formData[currentStep])}
                  disabled={!isStepComplete(currentStep)}
                >
                  Complete
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

