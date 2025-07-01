'use client'

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { JobPostingForm } from "./steps/job-posting-form"
import { CandidateProfileForm } from "./steps/candidate-profile-form"
import { OfferManagementForm } from "./steps/offer-management-form"
import { useRecruitment } from "./recruitment-context"

export function RecruitmentStepper() {
  const { recruitmentData, STEPS } = useRecruitment()

  const steps = [
    {
      id: STEPS.JOB_POSTING,
      title: 'Job Posting',
      description: 'Create and publish job posting',
      component: JobPostingForm
    },
    {
      id: STEPS.CANDIDATE_PROFILE,
      title: 'Candidate Profile',
      description: 'Fill in candidate information',
      component: CandidateProfileForm
    },
    {
      id: STEPS.OFFER_MANAGEMENT,
      title: 'Offer Management',
      description: 'Generate and manage job offers',
      component: OfferManagementForm
    }
  ]

  const currentStepIndex = steps.findIndex(step => step.id === recruitmentData.currentStep)
  const progress = ((currentStepIndex + 1) / steps.length) * 100

  const handleStepComplete = (stepId) => {
    completeStep(stepId)
  }

  const handleStepBack = () => {
    const previousStep = steps[currentStepIndex - 1]
    if (previousStep) {
      completeStep(previousStep.id)
    }
  }

  const CurrentStepComponent = steps[currentStepIndex]?.component

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Step {currentStepIndex + 1} of {steps.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
      </div>

      <nav aria-label="Progress" className="hidden md:block">
        <ol role="list" className="flex items-center justify-between">
          {steps.map((step, index) => (
            <li key={step.id} className="flex-1">
              <div className="group relative flex items-center justify-center">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-medium ${
                    index <= currentStepIndex
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
                  <div
                    className={`absolute left-[50%] h-[2px] w-full ${
                      index < currentStepIndex
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
              {steps[currentStepIndex]?.title}
            </h2>
            <p className="text-muted-foreground">
              {steps[currentStepIndex]?.description}
            </p>
          </div>

          {CurrentStepComponent && (
            <CurrentStepComponent
              onComplete={handleStepComplete}
              onBack={handleStepBack}
            />
          )}
        </div>
      </Card>
    </div>
  )
}

