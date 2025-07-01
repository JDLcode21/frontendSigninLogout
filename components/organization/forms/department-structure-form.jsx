'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import { Switch } from "@/components/ui/switch"

const structureSchema = z.object({
  parentDepartment: z.string().optional(),
  level: z.string().min(1, "Organization level is required"),
  hasSubDepartments: z.boolean(),
  maxPositions: z.string().min(1, "Maximum positions is required"),
  reportingStructure: z.string().min(1, "Reporting structure is required"),
  budgetControl: z.boolean(),
})

export function DepartmentStructureForm({ data, onSave }) {
  const form = useForm({
    resolver: zodResolver(structureSchema),
    defaultValues: data || {
      parentDepartment: "",
      level: "",
      hasSubDepartments: false,
      maxPositions: "",
      reportingStructure: "",
      budgetControl: false,
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSave)} className="space-y-6">
        <div className="grid gap-4">
          <FormField
            control={form.control}
            name="parentDepartment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Parent Department (Optional)</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select parent department" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="dept1">Operations</SelectItem>
                    <SelectItem value="dept2">Corporate Services</SelectItem>
                    <SelectItem value="dept3">Business Development</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  Select if this is a sub-department
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="level"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization Level</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select organization level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Level 1 - Executive</SelectItem>
                    <SelectItem value="2">Level 2 - Senior Management</SelectItem>
                    <SelectItem value="3">Level 3 - Middle Management</SelectItem>
                    <SelectItem value="4">Level 4 - Operational</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hasSubDepartments"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Allow Sub-departments</FormLabel>
                  <FormDescription>
                    Enable creation of sub-departments under this department
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
            name="maxPositions"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Maximum Positions</FormLabel>
                <FormControl>
                  <Input type="number" min="1" placeholder="e.g. 50" {...field} />
                </FormControl>
                <FormDescription>
                  Maximum number of positions allowed in this department
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="reportingStructure"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reporting Structure</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select reporting structure" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="hierarchical">Hierarchical</SelectItem>
                    <SelectItem value="matrix">Matrix</SelectItem>
                    <SelectItem value="flat">Flat</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="budgetControl"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Budget Control</FormLabel>
                  <FormDescription>
                    Enable independent budget management
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
          Save & Continue
        </Button>
      </form>
    </Form>
  )
}

