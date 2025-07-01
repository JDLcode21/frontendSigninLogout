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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

const securitySettingsSchema = z.object({
authentication: z.object({
  method: z.enum(['local', 'sso', 'oauth']),
  mfaEnabled: z.boolean(),
  mfaMethods: z.array(z.enum(['authenticator', 'sms', 'email'])),
  passwordPolicy: z.object({
    minLength: z.number().min(8).max(32),
    requireSpecialChars: z.boolean(),
    requireNumbers: z.boolean(),
    requireUppercase: z.boolean(),
    expiryDays: z.number().min(0).max(365),
  }),
}),
session: z.object({
  timeout: z.number().min(5).max(1440),
  maxConcurrentSessions: z.number().min(1).max(10),
  rememberMeDuration: z.number().min(1).max(30),
}),
})

export default function SecuritySettingsPage() {
const form = useForm({
  resolver: zodResolver(securitySettingsSchema),
  defaultValues: {
    authentication: {
      method: 'local',
      mfaEnabled: false,
      mfaMethods: ['authenticator'],
      passwordPolicy: {
        minLength: 8,
        requireSpecialChars: true,
        requireNumbers: true,
        requireUppercase: true,
        expiryDays: 90,
      },
    },
    session: {
      timeout: 30,
      maxConcurrentSessions: 1,
      rememberMeDuration: 7,
    },
  },
})

async function onSubmit(values) {
  try {
    await fetch('/api/settings/security', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
    
    toast({
      title: "Settings updated",
      description: "Your security settings have been updated successfully.",
    })
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to update settings. Please try again.",
      variant: "destructive",
    })
  }
}

return (
  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Authentication Settings</CardTitle>
          <CardDescription>
            Configure how users authenticate with the system.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FormField
            control={form.control}
            name="authentication.method"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Authentication Method</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select authentication method" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="local">Local Authentication</SelectItem>
                    <SelectItem value="sso">Single Sign-On (SSO)</SelectItem>
                    <SelectItem value="oauth">OAuth 2.0</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Choose how users will authenticate with the system.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="authentication.mfaEnabled"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">
                    Multi-Factor Authentication
                  </FormLabel>
                  <FormDescription>
                    Require MFA for all users.
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
          <CardTitle>Password Policy</CardTitle>
          <CardDescription>
            Define password requirements and expiration rules.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FormField
            control={form.control}
            name="authentication.passwordPolicy.minLength"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Minimum Password Length</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={e => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormDescription>
                  Minimum number of characters required for passwords.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid gap-4">
            <FormField
              control={form.control}
              name="authentication.passwordPolicy.requireSpecialChars"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel>
                      Require Special Characters
                    </FormLabel>
                    <FormDescription>
                      Passwords must contain special characters.
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
              name="authentication.passwordPolicy.requireNumbers"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel>
                      Require Numbers
                    </FormLabel>
                    <FormDescription>
                      Passwords must contain numbers.
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
              name="authentication.passwordPolicy.requireUppercase"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel>
                      Require Uppercase
                    </FormLabel>
                    <FormDescription>
                      Passwords must contain uppercase letters.
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

          <FormField
            control={form.control}
            name="authentication.passwordPolicy.expiryDays"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password Expiry (Days)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={e => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormDescription>
                  Number of days before passwords expire (0 for never).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Session Settings</CardTitle>
          <CardDescription>
            Configure session timeout and concurrent login policies.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FormField
            control={form.control}
            name="session.timeout"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Session Timeout (minutes)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={e => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormDescription>
                  How long until an inactive session expires.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="session.maxConcurrentSessions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Maximum Concurrent Sessions</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={e => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormDescription>
                  Maximum number of active sessions per user.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="session.rememberMeDuration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Remember Me Duration (days)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={e => field.onChange(parseInt(e.target.value))}
                  />
                </FormControl>
                <FormDescription>
                  How long to keep users logged in when using "Remember Me".
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button type="submit">Save Changes</Button>
      </div>
    </form>
  </Form>
)
}

