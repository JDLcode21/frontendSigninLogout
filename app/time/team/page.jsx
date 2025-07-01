'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "@/components/ui/calendar"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function TeamSchedulePage() {
  // Example team data
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Senior Developer",
      status: "available",
      avatar: "/avatars/01.png"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Product Manager",
      status: "on-leave",
      avatar: "/avatars/02.png"
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Designer",
      status: "available",
      avatar: "/avatars/03.png"
    }
  ]

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold tracking-tight">Team Schedule</h1>

      <div className="grid gap-4 md:grid-cols-[300px_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[500px] pr-4">
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center space-x-4 rounded-md border p-4"
                  >
                    <Avatar>
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                    <Badge
                      variant={member.status === 'available' ? 'default' : 'secondary'}
                    >
                      {member.status === 'available' ? 'Available' : 'On Leave'}
                    </Badge>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Schedule Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Calendar
                mode="multiple"
                selected={[]}
                className="rounded-md border"
              />
              <div className="flex gap-2">
                <Badge variant="outline" className="w-32 justify-center">
                  Available
                </Badge>
                <Badge variant="secondary" className="w-32 justify-center">
                  On Leave
                </Badge>
                <Badge variant="destructive" className="w-32 justify-center">
                  Holiday
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

