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
import { Switch } from "@/components/ui/switch"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  fields: z.object({
    leaveType: z.boolean(),
    startDate: z.boolean(),
    endDate: z.boolean(),
    reason: z.boolean(),
    attachments: z.boolean(),
    manager: z.boolean(),
  }),
  validation: z.object({
    requireReason: z.boolean(),
    minDaysNotice: z
      .number({
        required_error: 'Please enter the minimum number of days before leave can start.',
        invalid_type_error: 'Minimum notice period must be a valid number.'
      })
      .min(0, { message: 'Minimum notice period must be at least 0 days.' }),
    maxDuration: z
      .number({
        required_error: 'Please enter the maximum number of days for a single leave request.',
        invalid_type_error: 'Maximum duration must be a valid number.'
      })
      .min(1, { message: 'Maximum duration must be at least 1 day.' }),
    requireAttachments: z.boolean(),
    requireManagerApproval: z.boolean(),
  }),
})

export default function LeaveRequestFormConfig() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fields: {
        leaveType: true,
        startDate: true,
        endDate: true,
        reason: true,
        attachments: false,
        manager: true,
      },
      validation: {
        requireReason: true,
        minDaysNotice: 7,
        maxDuration: 30,
        requireAttachments: false,
        requireManagerApproval: true,
      },
    },
  })

  async function onSubmit(values) {
    try {
      console.log(values)
      toast({
        title: "Form configuration saved",
        description: "The leave request form has been updated.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save form configuration.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Leave Request Form Configuration</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Form Fields</CardTitle>
              <CardDescription>
                Configure which fields appear on the leave request form.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <FormField
                control={form.control}
                name="fields.leaveType"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between">
                    <div className="space-y-0.5">
                      <FormLabel>Leave Type</FormLabel>
                      <FormDescription>
                        Type of leave being requested
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
                name="fields.startDate"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between">
                    <div className="space-y-0.5">
                      <FormLabel>Start Date</FormLabel>
                      <FormDescription>
                        When the leave period begins
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
                name="fields.endDate"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between">
                    <div className="space-y-0.5">
                      <FormLabel>End Date</FormLabel>
                      <FormDescription>
                        When the leave period ends
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
                name="fields.reason"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between">
                    <div className="space-y-0.5">
                      <FormLabel>Reason Field</FormLabel>
                      <FormDescription>
                        Allow employees to provide reason for leave
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
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Validation Rules</CardTitle>
              <CardDescription>
                Set validation rules for the leave request form.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <FormField
                control={form.control}
                name="validation.minDaysNotice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Minimum Notice Period (Days)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={0}
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormDescription>
                      Minimum number of days before leave can start
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="validation.maxDuration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maximum Duration (Days)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={1}
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormDescription>
                      Maximum number of days for a single leave request
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="validation.requireManagerApproval"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel>Require Manager Approval</FormLabel>
                      <FormDescription>
                        Leave requests must be approved by a manager
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
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-4">
            <Button variant="outline">Reset to Defaults</Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

