import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Clock } from 'lucide-react'
import Link from "next/link"

export default function TimeFormsPage() {
  const formTypes = [
    {
      title: "Leave Request Form",
      description: "Configure leave request form fields and validation",
      icon: FileText,
      href: "/time/forms/leave-request"
    },
    {
      title: "Attendance Form",
      description: "Configure attendance tracking form fields",
      icon: Clock,
      href: "/time/forms/attendance"
    }
  ]

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Time Management Forms</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {formTypes.map((form) => (
          <Card key={form.href} className="hover:shadow-lg transition-shadow">
            <Link href={form.href}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <form.icon className="h-6 w-6 text-muted-foreground" />
                  <CardTitle>{form.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{form.description}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

