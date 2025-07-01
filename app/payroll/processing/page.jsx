'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ModalForm } from "@/components/shared/modal-form"
import { StepFormProvider } from "@/contexts/step-form-context"
import { PayrollSelectionForm } from "@/components/payroll/forms/payroll-selection-form"
import { PayrollCalculationForm } from "@/components/payroll/forms/payroll-calculation-form"
import { PayrollValidationForm } from "@/components/payroll/forms/payroll-validation-form"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Calculator, Clock, CheckCircle } from 'lucide-react'

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

// Example data - would come from API in real app
const recentRuns = [
  {
    id: 1,
    period: "January 2024",
    status: "In Progress",
    employees: 150,
    totalAmount: "$450,000",
    startDate: "2024-01-15",
  },
  {
    id: 2,
    period: "December 2023",
    status: "Completed",
    employees: 148,
    totalAmount: "$445,000",
    startDate: "2023-12-15",
  },
]

export default function PayrollProcessingPage() {
  const [isNewRunModalOpen, setIsNewRunModalOpen] = useState(false)

  const getStatusBadge = (status) => {
    const variants = {
      "In Progress": "warning",
      "Pending": "secondary",
      "Completed": "success",
      "Error": "destructive",
    }
    return <Badge variant={variants[status] || "default"}>{status}</Badge>
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Payroll Processing</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>New Run</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              className="w-full"
              onClick={() => setIsNewRunModalOpen(true)}
            >
              <Calculator className="mr-2 h-4 w-4" />
              Start New Run
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Runs</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full" asChild>
              <a href="/payroll/processing/pending">
                <Clock className="mr-2 h-4 w-4" />
                View Pending
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full" asChild>
              <a href="/payroll/processing/approvals">
                <CheckCircle className="mr-2 h-4 w-4" />
                Review Approvals
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Payroll Runs</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Period</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>Employees</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentRuns.map((run) => (
                <TableRow key={run.id}>
                  <TableCell>{run.period}</TableCell>
                  <TableCell>{run.startDate}</TableCell>
                  <TableCell>{run.employees}</TableCell>
                  <TableCell>{run.totalAmount}</TableCell>
                  <TableCell>{getStatusBadge(run.status)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <StepFormProvider totalSteps={payrollSteps.length}>
        <ModalForm
          open={isNewRunModalOpen}
          onOpenChange={setIsNewRunModalOpen}
          title="Process New Payroll"
          steps={payrollSteps}
        />
      </StepFormProvider>
    </div>
  )
}

