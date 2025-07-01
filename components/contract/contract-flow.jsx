'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ModalForm } from "@/components/shared/modal-form"
import { StepFormProvider } from "@/contexts/step-form-context"
import { ContractDetailsForm } from "./forms/contract-details-form"
import { PositionLinkForm } from "./forms/position-link-form"
import { ContractValidationForm } from "./forms/contract-validation-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, PenLine } from 'lucide-react'

const steps = [
  {
    title: "Contract Details",
    component: ContractDetailsForm,
  },
  {
    title: "Position Assignment",
    component: PositionLinkForm,
  },
  {
    title: "Review & Validate",
    component: ContractValidationForm,
  },
]

export function ContractFlow() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isUpdateMode, setIsUpdateMode] = useState(false)

  return (
    <StepFormProvider totalSteps={steps.length}>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Create New Contract</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => {
                setIsUpdateMode(false)
                setIsModalOpen(true)
              }}
              className="w-full"
            >
              <FileText className="mr-2 h-4 w-4" />
              Create New Contract
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Update Existing Contract</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {
                setIsUpdateMode(true)
                setIsModalOpen(true)
              }}
            >
              <PenLine className="mr-2 h-4 w-4" />
              Modify Contract
            </Button>
          </CardContent>
        </Card>

        <ModalForm
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          title={isUpdateMode ? "Update Contract" : "Create New Contract"}
          steps={steps}
        />
      </div>
    </StepFormProvider>
  )
}

