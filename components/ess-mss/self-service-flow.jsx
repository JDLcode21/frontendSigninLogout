'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ModalForm } from "@/components/shared/modal-form"
import { StepFormProvider } from "@/contexts/step-form-context"
import { RequestTypeForm } from "./forms/request-type-form"
import { RequestDetailsForm } from "./forms/request-details-form"
import { RequestValidationForm } from "./forms/request-validation-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, ClipboardList } from 'lucide-react'

const requestSteps = [
  {
    title: "Request Type",
    component: RequestTypeForm,
  },
  {
    title: "Request Details",
    component: RequestDetailsForm,
  },
  {
    title: "Review & Submit",
    component: RequestValidationForm,
  },
]

export function SelfServiceFlow() {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false)

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>New Request</CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={() => setIsRequestModalOpen(true)}
            className="w-full"
          >
            <FileText className="mr-2 h-4 w-4" />
            Submit New Request
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>My Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            variant="outline"
            className="w-full"
          >
            <ClipboardList className="mr-2 h-4 w-4" />
            View Requests
          </Button>
        </CardContent>
      </Card>

      <StepFormProvider totalSteps={requestSteps.length}>
        <ModalForm
          open={isRequestModalOpen}
          onOpenChange={setIsRequestModalOpen}
          title="Submit Request"
          steps={requestSteps}
        />
      </StepFormProvider>
    </div>
  )
}

