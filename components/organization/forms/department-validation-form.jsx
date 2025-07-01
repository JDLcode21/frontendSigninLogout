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
import { CheckCircle } from 'lucide-react'

const validationSchema = z.object({
  comments: z.string().optional(),
})

export function DepartmentValidationForm({ data: formData, onSave }) {
  const form = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      comments: "",
    },
  })

  // This would come from previous steps in a real application
  const departmentData = {
    name: "Human Resources",
    code: "HR001",
    type: "Core Department",
    costCenter: "CC001",
    manager: "Sarah Johnson",
    level: "Level 2 - Senior Management",
    reportingStructure: "Hierarchical",
    maxPositions: "50",
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSave)} className="space-y-6">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Department Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Department Name</p>
                  <p className="text-sm text-muted-foreground">{departmentData.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Department Code</p>
                  <p className="text-sm text-muted-foreground">{departmentData.code}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Type</p>
                  <Badge variant="outline">{departmentData.type}</Badge>
                </div>
                <div>
                  <p className="text-sm font-medium">Cost Center</p>
                  <p className="text-sm text-muted-foreground">{departmentData.costCenter}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Structure Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Organization Level</p>
                  <p className="text-sm text-muted-foreground">{departmentData.level}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Reporting Structure</p>
                  <p className="text-sm text-muted-foreground">{departmentData.reportingStructure}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Maximum Positions</p>
                  <p className="text-sm text-muted-foreground">{departmentData.maxPositions}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Department Manager</p>
                  <p className="text-sm text-muted-foreground">{departmentData.manager}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <p className="text-sm text-muted-foreground">
              All required fields have been validated
            </p>
          </div>

          <FormField
            control={form.control}
            name="comments"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Comments</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Add any additional notes or comments about this department"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full">
          Create Department
        </Button>
      </form>
    </Form>
  )
}

