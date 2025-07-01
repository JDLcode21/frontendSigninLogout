'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, UserPlus } from 'lucide-react'
import { StepFormProvider } from "@/contexts/step-form-context"
import { ModalForm } from "@/components/shared/modal-form"
import { DepartmentDetailsForm } from "@/components/organization/forms/department-details-form"
import { DepartmentStructureForm } from "@/components/organization/forms/department-structure-form"
import { DepartmentValidationForm } from "@/components/organization/forms/department-validation-form"
import { PositionDetailsForm } from "@/components/organization/forms/position-details-form"
import { PositionRequirementsForm } from "@/components/organization/forms/position-requirements-form"
import { PositionValidationForm } from "@/components/organization/forms/position-validation-form"

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

export default function OrganizationPage() {
  const [isDepartmentModalOpen, setIsDepartmentModalOpen] = useState(false)
  const [isPositionModalOpen, setIsPositionModalOpen] = useState(false)
  // const router = useRouter()

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Organization Management</h2>
      </div>

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
      </div>

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

