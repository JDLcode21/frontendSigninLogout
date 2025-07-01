'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'
import { useRouter } from "next/navigation"

export default function ReviewPage() {
  const router = useRouter()

  const sections = [
    {
      title: "Personal Information",
      status: "complete",
      items: ["Basic Details", "Contact Information", "Emergency Contacts"]
    },
    {
      title: "Contract Details",
      status: "complete",
      items: ["Employment Terms", "Position Details", "Compensation"]
    },
    {
      title: "Bank Information",
      status: "complete",
      items: ["Account Details", "Payment Preferences"]
    },
    {
      title: "Documents",
      status: "complete",
      items: ["ID Verification", "Address Proof", "Qualifications", "Tax Forms"]
    }
  ]

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Review & Submit</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <Card key={section.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {section.title}
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline" onClick={() => router.push("/onboarding")}>
          Back to Overview
        </Button>
        <Button onClick={() => router.push("/dashboard")}>
          Submit Onboarding
        </Button>
      </div>
    </div>
  )
}

