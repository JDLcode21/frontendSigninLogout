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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"

const payrollSelectionSchema = z.object({
  payPeriod: z.string().min(1, "Pay period is required"),
  payrollDate: z.string().min(1, "Payroll date is required"),
  employeeGroup: z.string().min(1, "Employee group is required"),
  includeBonus: z.boolean(),
  includeBenefits: z.boolean(),
  cutoffDate: z.string().min(1, "Cutoff date is required"),
})

export function PayrollSelectionForm({ data, onSave }) {
  const form = useForm({
    resolver: zodResolver(payrollSelectionSchema),
    defaultValues: data || {
      payPeriod: "",
      payrollDate: format(new Date(), 'yyyy-MM-dd'),
      employeeGroup: "",
      includeBonus: false,
      includeBenefits: true,
      cutoffDate: format(new Date(), 'yyyy-MM-dd'),
    },
  })

  const onSubmit = async (values) => {
    try {
      await onSave(values)
    } catch (error) {
      form.setError("root", {
        type: "manual",
        message: "Failed to save payroll selection. Please try again.",
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="payPeriod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pay Period</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select pay period" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="bi-weekly">Bi-Weekly</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="payrollDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Payroll Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormDescription>
                  Date when payroll will be processed
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="employeeGroup"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Employee Group</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select employee group" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="all">All Employees</SelectItem>
                    <SelectItem value="permanent">Permanent Staff</SelectItem>
                    <SelectItem value="contract">Contract Staff</SelectItem>
                    <SelectItem value="part-time">Part-Time Staff</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cutoffDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cutoff Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormDescription>
                  Last date for including transactions
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="includeBonus"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel>Include Bonuses</FormLabel>
                  <FormDescription>
                    Include bonus payments in this payroll run
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="includeBenefits"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel>Include Benefits</FormLabel>
                  <FormDescription>
                    Include benefit calculations in this payroll run
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full">
          Continue to Calculations
        </Button>
      </form>
    </Form>
  )
}

