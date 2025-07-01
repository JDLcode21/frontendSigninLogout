'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ModalForm } from "@/components/shared/modal-form"
import { StepFormProvider } from "@/contexts/step-form-context"
import { PayrollSelectionForm } from "./forms/payroll-selection-form"
import { PayrollCalculationForm } from "./forms/payroll-calculation-form"
import { PayrollValidationForm } from "./forms/payroll-validation-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, History } from 'lucide-react'

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

export function PayrollFlow() {
  const [isPayrollModalOpen, setIsPayrollModalOpen] = useState(false)

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Run Payroll</CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={() => setIsPayrollModalOpen(true)}
            className="w-full"
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Process New Payroll
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
          >
            <History className="mr-2 h-4 w-4" />
            View Past Runs
          </Button>
        </CardContent>
      </Card>

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

