'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from 'lucide-react'

const validationSchema = z.object({
  comments: z.string().optional(),
})

export function ContractValidationForm({ data: formData, onSave }) {
  const form = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      comments: "",
    },
  })

  // This would come from the previous steps in a real application
  const contractData = {
    employeeId: "EMP001",
    contractType: "Full Time",
    startDate: "2024-02-01",
    isFixedTerm: false,
    department: "Engineering",
    position: "Software Developer",
    costCenter: "CC001",
    reportingTo: "John Doe",
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSave)} className="space-y-6">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contract Details Review</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Employee ID</p>
                  <p className="text-sm text-muted-foreground">{contractData.employeeId}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Contract Type</p>
                  <p className="text-sm text-muted-foreground">{contractData.contractType}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Start Date</p>
                  <p className="text-sm text-muted-foreground">{contractData.startDate}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Contract Term</p>
                  <Badge variant="outline">
                    {contractData.isFixedTerm ? "Fixed Term" : "Permanent"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Position Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Department</p>
                  <p className="text-sm text-muted-foreground">{contractData.department}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Position</p>
                  <p className="text-sm text-muted-foreground">{contractData.position}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Cost Center</p>
                  <p className="text-sm text-muted-foreground">{contractData.costCenter}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Reporting To</p>
                  <p className="text-sm text-muted-foreground">{contractData.reportingTo}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <p className="text-sm text-muted-foreground">
              All mandatory fields have been validated
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
                    placeholder="Add any additional notes or comments about this contract"
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
          Finalize Contract
        </Button>
      </form>
    </Form>
  )
}

