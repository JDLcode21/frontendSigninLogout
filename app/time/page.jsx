import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, FileText } from 'lucide-react'
import Link from "next/link"

export default function TimePage() {
  const modules = [
    {
      title: "Calendar View",
      description: "View and manage your schedule",
      icon: Calendar,
      href: "/time/calendar",
      color: "text-blue-500"
    },
    {
      title: "Leave Management",
      description: "Request and track leave",
      icon: FileText,
      href: "/time/leave",
      color: "text-green-500"
    },
    {
      title: "Attendance",
      description: "Track time and attendance",
      icon: Clock,
      href: "/time/attendance",
      color: "text-purple-500"
    },
    {
      title: "Team Schedule",
      description: "View team availability",
      icon: Users,
      href: "/time/team",
      color: "text-orange-500"
    }
  ]

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Time Management</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {modules.map((module) => (
          <Card key={module.href} className="hover:shadow-lg transition-shadow">
            <Link href={module.href}>
              <CardHeader>
                <module.icon className={`h-6 w-6 ${module.color}`} />
                <CardTitle className="mt-4">{module.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{module.description}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Button asChild>
            <Link href="/time/leave/request">
              <FileText className="mr-2 h-4 w-4" />
              Request Leave
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/time/attendance">
              <Clock className="mr-2 h-4 w-4" />
              Clock In/Out
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

