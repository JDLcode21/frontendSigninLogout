'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ModalForm } from "@/components/shared/modal-form"
import { StepFormProvider } from "@/contexts/step-form-context"
import { DepartmentDetailsForm } from "./forms/department-details-form"
import { DepartmentStructureForm } from "./forms/department-structure-form"
import { DepartmentValidationForm } from "./forms/department-validation-form"
import { PositionDetailsForm } from "./forms/position-details-form"
import { PositionRequirementsForm } from "./forms/position-requirements-form"
import { PositionValidationForm } from "./forms/position-validation-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, UserPlus } from 'lucide-react'

const departmentSteps = [
  {
    title: "Department Details",
    component: DepartmentDetailsForm,
  },
  {
    title: "Structure & Hierarchy",
    component: DepartmentStructureForm,
  },
  {
    title: "Review & Validate",
    component: DepartmentValidationForm,
  },
]

const positionSteps = [
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

export function OrganizationFlow() {
  const [isDepartmentModalOpen, setIsDepartmentModalOpen] = useState(false)
  const [isPositionModalOpen, setIsPositionModalOpen] = useState(false)

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Add New Department</CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={() => setIsDepartmentModalOpen(true)}
            className="w-full"
          >
            <Building2 className="mr-2 h-4 w-4" />
            Create Department
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Add New Position</CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={() => setIsPositionModalOpen(true)}
            className="w-full"
          >
            <UserPlus className="mr-2 h-4 w-4" />
            Create Position
          </Button>
        </CardContent>
      </Card>

      <StepFormProvider totalSteps={departmentSteps.length}>
        <ModalForm
          open={isDepartmentModalOpen}
          onOpenChange={setIsDepartmentModalOpen}
          title="Create New Department"
          steps={departmentSteps}
        />
      </StepFormProvider>

      <StepFormProvider totalSteps={positionSteps.length}>
        <ModalForm
          open={isPositionModalOpen}
          onOpenChange={setIsPositionModalOpen}
          title="Create New Position"
          steps={positionSteps}
        />
      </StepFormProvider>
    </div>
  )
}

