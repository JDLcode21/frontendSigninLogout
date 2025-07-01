'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
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
import { useRecruitment } from "../recruitment-context"

const offerManagementSchema = z.object({
  // Required fields
  position: z.string().min(2, "Position must be at least 2 characters"),
  offerTemplate: z.string().min(1, "Please select an offer template"),
  startDate: z.string().min(1, "Start date is required"),
  
  // Optional fields
  bonus: z.string().optional(),
  stockOptions: z.string().optional()
})

export function OfferManagementForm({ onComplete, onBack }) {
  const { recruitmentData, updateRecruitmentData } = useRecruitment()
  
  const form = useForm({
    resolver: zodResolver(offerManagementSchema),
    defaultValues: recruitmentData.offerManagement
  })

  function onSubmit(values) {
    updateRecruitmentData('offerManagement', values)
    onComplete('offer-management')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6">
          {/* Required Fields */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium">Required Fields</h3>
              <Badge>Required</Badge>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter position title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="offerTemplate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Offer Letter Template</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select template" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="standard">Standard Offer</SelectItem>
                        <SelectItem value="executive">Executive Offer</SelectItem>
                        <SelectItem value="contract">Contract Offer</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Proposed Start Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Optional Fields */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium">Optional Fields</h3>
              <Badge variant="secondary">Optional</Badge>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="bonus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bonus Structure</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter bonus details"
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
                name="stockOptions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock Options</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter stock options details"
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onBack}>
            Back to Candidate Profile
          </Button>
          <Button type="submit">Complete Process</Button>
        </div>
      </form>
    </Form>
  )
}

