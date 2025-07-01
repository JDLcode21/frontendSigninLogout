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

const positionLinkSchema = z.object({
  department: z.string().min(1, "Department is required"),
  position: z.string().min(1, "Position is required"),
  costCenter: z.string().min(1, "Cost center is required"),
  reportingTo: z.string().min(1, "Reporting manager is required"),
})

export function PositionLinkForm({ data, onSave }) {
  const form = useForm({
    resolver: zodResolver(positionLinkSchema),
    defaultValues: data || {
      department: "",
      position: "",
      costCenter: "",
      reportingTo: "",
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSave)} className="space-y-6">
        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Department</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="hr">Human Resources</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Select the department for this position
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Position</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="developer">Software Developer</SelectItem>
                    <SelectItem value="manager">Project Manager</SelectItem>
                    <SelectItem value="designer">UI Designer</SelectItem>
                    <SelectItem value="analyst">Business Analyst</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Link to an existing position in the organization
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="costCenter"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cost Center</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select cost center" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="cc001">CC001 - Engineering</SelectItem>
                    <SelectItem value="cc002">CC002 - HR</SelectItem>
                    <SelectItem value="cc003">CC003 - Finance</SelectItem>
                    <SelectItem value="cc004">CC004 - Marketing</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Assign to appropriate cost center
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="reportingTo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reporting To</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select manager" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="manager1">John Doe (Engineering Manager)</SelectItem>
                    <SelectItem value="manager2">Jane Smith (HR Director)</SelectItem>
                    <SelectItem value="manager3">Mike Johnson (Finance Head)</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Select the reporting manager
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full">
          Save & Continue
        </Button>
      </form>
    </Form>
  )
}

