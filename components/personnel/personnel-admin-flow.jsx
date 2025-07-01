'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ModalForm } from "@/components/shared/modal-form"
import { StepFormProvider } from "@/contexts/step-form-context"
import { PersonalDetailsForm } from "./forms/personal-details-form"
import { ContactInfoForm } from "./forms/contact-info-form"
import { PositionAssignmentForm } from "./forms/position-assignment-form"
import { BankDetailsForm } from "./forms/bank-details-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, Users } from 'lucide-react'

const steps = [
  {
    title: "Personal Details",
    component: PersonalDetailsForm,
  },
  {
    title: "Contact Information",
    component: ContactInfoForm,
  },
  {
    title: "Position Assignment",
    component: PositionAssignmentForm,
  },
  {
    title: "Bank Details",
    component: BankDetailsForm,
  },
]

export function PersonnelAdminFlow() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <StepFormProvider totalSteps={steps.length}>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Create New Employee</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="w-full"
            >
              <UserPlus className="mr-2 h-4 w-4" />
              Start New Employee Creation
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Update Existing Employee</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {/* Handle existing employee update */}}
            >
              <Users className="mr-2 h-4 w-4" />
              Select Employee to Update
            </Button>
          </CardContent>
        </Card>

        <ModalForm
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          title="Create Employee Record"
          steps={steps}
        />
      </div>
    </StepFormProvider>
  )
}

