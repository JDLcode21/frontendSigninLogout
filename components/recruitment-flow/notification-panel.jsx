'use client'

import { useRecruitment } from "./recruitment-context"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, ArrowRight } from 'lucide-react'
import { format } from "date-fns"

export function NotificationPanel() {
  const { recruitmentData } = useRecruitment()

  const getRoleColor = (role) => {
    if (!role) return 'bg-gray-500' // Add default color if role is undefined

    switch (role.toLowerCase()) {
      case 'recruiter':
        return 'bg-blue-500'
      case 'candidate':
        return 'bg-green-500'
      case 'hr admin':
        return 'bg-purple-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <Card className="p-4">
      <div className="flex items-center gap-2 mb-4">
        <Bell className="h-4 w-4" />
        <h3 className="font-semibold">Process Timeline</h3>
      </div>
      <div className="space-y-4">
        {recruitmentData.notifications.map((notification) => (
          <div key={notification.id} className="relative pl-6 pb-4 border-l-2 border-muted last:pb-0">
            <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge className={getRoleColor(notification.role)}>
                  {notification.role}
                </Badge>
                {notification.action && (
                  <>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <Badge variant="outline">{notification.action}</Badge>
                  </>
                )}
              </div>
              <p className="text-sm">{notification.message}</p>
              <p className="text-xs text-muted-foreground">
                {format(new Date(notification.timestamp), 'MMM d, yyyy HH:mm')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

