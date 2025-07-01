'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const validationSchema = z.object({
  comments: z.string().optional(),
  acknowledgment: z.boolean().refine(val => val === true, {
    message: "You must acknowledge the validation before proceeding"
  })
})

export function PayrollValidationForm({ data: formData, onSave }) {
  const form = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      comments: "",
      acknowledgment: false
    },
  })

  // This would come from previous steps in a real application
  const payrollData = {
    payPeriod: "Monthly",
    payrollDate: "2024-01-31",
    employeeGroup: "All Employees",
    totalEmployees: 150,
    grossPayroll: "$450,000",
    totalDeductions: "$67,500",
    netPayroll: "$427,500",
    warnings: [
      "Overtime hours exceed policy limit for 3 employees",
      "One employee has incomplete tax information"
    ],
    validations: [
      "All employee records found and validated",
      "Tax calculations verified",
      "Deduction rules applied correctly",
      "Bank information validated for all employees"
    ]
  }

  const onSubmit = async (values) => {
    try {
      await onSave(values)
    } catch (error) {
      form.setError("root", {
        type: "manual",
        message: "Failed to complete validation. Please try again.",
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Payroll Run Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Pay Period</p>
                  <p className="text-sm text-muted-foreground">{payrollData.payPeriod}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Payroll Date</p>
                  <p className="text-sm text-muted-foreground">{payrollData.payrollDate}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Employee Group</p>
                  <Badge variant="outline">{payrollData.employeeGroup}</Badge>
                </div>
                <div>
                  <p className="text-sm font-medium">Total Employees</p>
                  <p className="text-sm text-muted-foreground">{payrollData.totalEmployees}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Financial Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Gross Payroll</p>
                  <p className="text-sm text-muted-foreground">{payrollData.grossPayroll}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Total Deductions</p>
                  <p className="text-sm text-muted-foreground">{payrollData.totalDeductions}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Net Payroll</p>
                  <p className="text-sm font-bold">{payrollData.netPayroll}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {payrollData.warnings.length > 0 && (
            <Alert variant="warning">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Warnings Requiring Attention</AlertTitle>
              <AlertDescription>
                <ul className="list-disc pl-4">
                  {payrollData.warnings.map((warning, index) => (
                    <li key={index}>{warning}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Validation Checks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {payrollData.validations.map((validation, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{validation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <FormField
            control={form.control}
            name="comments"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Comments</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Add any additional notes or comments about this payroll run"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="acknowledgment"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel>Validation Acknowledgment</FormLabel>
                  <FormDescription>
                    I confirm that I have reviewed all calculations and warnings, and approve this payroll run for processing.
                  </FormDescription>
                </div>
                <FormControl>
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={field.onChange}
                    className="h-4 w-4"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end space-x-4">
          <Button type="submit" disabled={!form.watch("acknowledgment")}>
            Process Payroll
          </Button>
        </div>
      </form>
    </Form>
  )
}

