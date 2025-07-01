'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StepFormProvider } from "@/contexts/step-form-context"
import { ModalForm } from "@/components/shared/modal-form"
import { Calculator, History, CreditCard } from 'lucide-react'
import { PayrollSelectionForm } from "@/components/payroll/forms/payroll-selection-form"
import { PayrollCalculationForm } from "@/components/payroll/forms/payroll-calculation-form"
import { PayrollValidationForm } from "@/components/payroll/forms/payroll-validation-form"

const payrollSteps = [
  {
    title: "Payroll Selection",
    component: PayrollSelectionForm,
  },
  {
    title: "Calculation & Adjustments",
    component: PayrollCalculationForm,
  },
  {
    title: "Review & Process",
    component: PayrollValidationForm,
  },
]

export default function PayrollPage() {
  const [isPayrollModalOpen, setIsPayrollModalOpen] = useState(false)

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Payroll Management</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Process Payroll</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => setIsPayrollModalOpen(true)}
              className="w-full"
            >
              <Calculator className="mr-2 h-4 w-4" />
              Start New Payroll Run
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Salary Components</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              variant="outline"
              className="w-full"
              onClick={() => {/* Handle salary components */}}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Manage Components
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payroll History</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              variant="outline"
              className="w-full"
              onClick={() => {/* Handle payroll history */}}
            >
              <History className="mr-2 h-4 w-4" />
              View History
            </Button>
          </CardContent>
        </Card>
      </div>

      <StepFormProvider totalSteps={payrollSteps.length}>
        <ModalForm
          open={isPayrollModalOpen}
          onOpenChange={setIsPayrollModalOpen}
          title="Process Payroll"
          steps={payrollSteps}
        />
      </StepFormProvider>
    </div>
  )
}

