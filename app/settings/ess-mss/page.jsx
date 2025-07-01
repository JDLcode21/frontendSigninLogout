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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

const essSettingsSchema = z.object({
  ess: z.object({
    enabled: z.boolean(),
    features: z.object({
      leaveManagement: z.boolean(),
      timeTracking: z.boolean(),
      expenseClaims: z.boolean(),
      documentsAccess: z.boolean(),
      profileUpdate: z.boolean(),
    }),
    accessControl: z.object({
      mobileAccess: z.boolean(),
      ipRestriction: z.boolean(),
      allowedIPs: z.string().optional(),
    }),
  }),
  mss: z.object({
    enabled: z.boolean(),
    features: z.object({
      teamManagement: z.boolean(),
      leaveApproval: z.boolean(),
      performanceReview: z.boolean(),
      timeApproval: z.boolean(),
      expenseApproval: z.boolean(),
    }),
    approvalLevels: z.number().min(1).max(5),
  }),
})

export default function ESSMSSSettings() {
  const form = useForm({
    resolver: zodResolver(essSettingsSchema),
    defaultValues: {
      ess: {
        enabled: true,
        features: {
          leaveManagement: true,
          timeTracking: true,
          expenseClaims: true,
          documentsAccess: true,
          profileUpdate: true,
        },
        accessControl: {
          mobileAccess: true,
          ipRestriction: false,
          allowedIPs: "",
        },
      },
      mss: {
        enabled: true,
        features: {
          teamManagement: true,
          leaveApproval: true,
          performanceReview: true,
          timeApproval: true,
          expenseApproval: true,
        },
        approvalLevels: 2,
      },
    },
  })

  async function onSubmit(values) {
    try {
      const response = await fetch('/api/settings/ess-mss', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      
      if (!response.ok) throw new Error('Failed to save settings')
      
      toast({
        title: "Settings saved",
        description: "ESS/MSS settings have been updated successfully.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">ESS/MSS Settings</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Employee Self Service (ESS)</CardTitle>
              <CardDescription>
                Configure employee self-service features and access control
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <FormField
                control={form.control}
                name="ess.enabled"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Enable ESS</FormLabel>
                      <FormDescription>
                        Allow employees to access self-service features
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

              <div className="grid gap-4">
                <h3 className="text-lg font-medium">ESS Features</h3>
                <div className="grid gap-4">
                  {Object.entries({
                    leaveManagement: "Leave Management",
                    timeTracking: "Time Tracking",
                    expenseClaims: "Expense Claims",
                    documentsAccess: "Documents Access",
                    profileUpdate: "Profile Updates",
                  }).map(([key, label]) => (
                    <FormField
                      key={key}
                      control={form.control}
                      name={`ess.features.${key}`}
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between">
                          <FormLabel className="text-sm">{label}</FormLabel>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Manager Self Service (MSS)</CardTitle>
              <CardDescription>
                Configure manager self-service features and approval workflows
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <FormField
                control={form.control}
                name="mss.enabled"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Enable MSS</FormLabel>
                      <FormDescription>
                        Allow managers to access team management features
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

              <div className="grid gap-4">
                <h3 className="text-lg font-medium">MSS Features</h3>
                <div className="grid gap-4">
                  {Object.entries({
                    teamManagement: "Team Management",
                    leaveApproval: "Leave Approval",
                    performanceReview: "Performance Review",
                    timeApproval: "Time Approval",
                    expenseApproval: "Expense Approval",
                  }).map(([key, label]) => (
                    <FormField
                      key={key}
                      control={form.control}
                      name={`mss.features.${key}`}
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between">
                          <FormLabel className="text-sm">{label}</FormLabel>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
              </div>

              <FormField
                control={form.control}
                name="mss.approvalLevels"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Approval Levels</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value.toString()}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select approval levels" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((level) => (
                          <SelectItem key={level} value={level.toString()}>
                            {level} {level === 1 ? 'Level' : 'Levels'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Number of approval levels required for requests
                    </FormDescription>
                    <FormMessage />
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

