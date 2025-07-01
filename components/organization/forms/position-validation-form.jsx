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

export function PositionValidationForm({ data: formData, onSave }) {
  const form = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      comments: "",
    },
  })

  // This would come from previous steps in a real application
  const positionData = {
    title: "Senior Software Engineer",
    code: "SE001",
    department: "Engineering",
    level: "Senior",
    type: "Full Time",
    reportingTo: "Engineering Manager",
    education: "Bachelor's Degree",
    experience: "6-8 years",
    salaryGrade: "Grade 3",
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSave)} className="space-y-6">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Position Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Position Title</p>
                  <p className="text-sm text-muted-foreground">{positionData.title}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Position Code</p>
                  <p className="text-sm text-muted-foreground">{positionData.code}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Department</p>
                  <p className="text-sm text-muted-foreground">{positionData.department}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Level</p>
                  <Badge variant="outline">{positionData.level}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Education</p>
                  <p className="text-sm text-muted-foreground">{positionData.education}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Experience</p>
                  <p className="text-sm text-muted-foreground">{positionData.experience}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Employment Type</p>
                  <p className="text-sm text-muted-foreground">{positionData.type}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Salary Grade</p>
                  <p className="text-sm text-muted-foreground">{positionData.salaryGrade}</p>
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
                    placeholder="Add any additional notes or comments about this position"
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
          Create Position
        </Button>
      </form>
    </Form>
  )
}

