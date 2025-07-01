'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const calculationSchema = z.object({
  overtimeRate: z.string().min(1, "Overtime rate is required"),
  taxRate: z.string().min(1, "Tax rate is required"),
  deductionAdjustments: z.string().optional(),
  bonusAdjustments: z.string().optional(),
})

export function PayrollCalculationForm({ data, onSave }) {
  const form = useForm({
    resolver: zodResolver(calculationSchema),
    defaultValues: data || {
      overtimeRate: "1.5",
      taxRate: "20",
      deductionAdjustments: "",
      bonusAdjustments: "",
    },
  })

  // Example calculation summary - would come from API in real app
  const calculationSummary = {
    totalEmployees: 150,
    grossPayroll: 450000,
    totalDeductions: 67500,
    totalBenefits: 45000,
    netPayroll: 427500,
    warnings: [
      "3 employees have overtime exceeding 20 hours",
      "1 employee has pending benefit enrollment"
    ]
  }

  const onSubmit = async (values) => {
    try {
      await onSave(values)
    } catch (error) {
      form.setError("root", {
        type: "manual",
        message: "Failed to save calculations. Please try again.",
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Calculation Parameters</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="overtimeRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Overtime Rate (x)</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" step="0.1" />
                    </FormControl>
                    <FormDescription>
                      Multiplier for overtime hours
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="taxRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tax Rate (%)</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" step="0.1" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deductionAdjustments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deduction Adjustments</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" step="0.01" />
                    </FormControl>
                    <FormDescription>
                      Additional deductions if applicable
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bonusAdjustments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bonus Adjustments</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" step="0.01" />
                    </FormControl>
                    <FormDescription>
                      Additional bonuses if applicable
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {calculationSummary.warnings.length > 0 && (
            <Alert variant="warning">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Calculation Warnings</AlertTitle>
              <AlertDescription>
                <ul className="list-disc pl-4">
                  {calculationSummary.warnings.map((warning, index) => (
                    <li key={index}>{warning}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}

          <Card>
            <CardHeader>
              <CardTitle>Calculation Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Total Employees</TableCell>
                    <TableCell className="text-right">{calculationSummary.totalEmployees}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Gross Payroll</TableCell>
                    <TableCell className="text-right">${calculationSummary.grossPayroll.toLocaleString()}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total Deductions</TableCell>
                    <TableCell className="text-right">${calculationSummary.totalDeductions.toLocaleString()}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total Benefits</TableCell>
                    <TableCell className="text-right">${calculationSummary.totalBenefits.toLocaleString()}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Net Payroll</TableCell>
                    <TableCell className="text-right font-medium">${calculationSummary.netPayroll.toLocaleString()}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end space-x-4">
          <Button type="submit">
            Continue to Review
          </Button>
        </div>
      </form>
    </Form>
  )
}

