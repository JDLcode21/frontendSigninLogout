'use client'

import { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'
import Link from "next/link"

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  // Example leave data
  const leaveData = [
    { date: new Date(2024, 0, 15), type: 'vacation', status: 'approved' },
    { date: new Date(2024, 0, 20), type: 'sick', status: 'pending' },
  ]

  const dateHasLeave = (date) => {
    return leaveData.find(leave => 
      leave.date.toDateString() === date.toDateString()
    )
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Calendar View</h1>
        <Button asChild>
          <Link href="/time/leave/request">
            <Plus className="mr-2 h-4 w-4" />
            Request Leave
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_300px]">
        <Card>
          <CardHeader>
            <CardTitle>Leave Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
              modifiers={{
                leave: (date) => dateHasLeave(date) !== undefined
              }}
              modifiersStyles={{
                leave: {
                  fontWeight: 'bold',
                  textDecoration: 'underline'
                }
              }}
              components={{
                DayContent: ({ date }) => {
                  const leave = dateHasLeave(date)
                  return (
                    <div className="relative w-full h-full">
                      <span>{date.getDate()}</span>
                      {leave && (
                        <Badge 
                          variant={leave.status === 'approved' ? 'default' : 'secondary'}
                          className="absolute -top-1 -right-1 h-2 w-2 p-0"
                        />
                      )}
                    </div>
                  )
                }
              }}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Leave Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Annual Leave</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-muted-foreground">Total:</span>
                  <span>20 days</span>
                  <span className="text-muted-foreground">Used:</span>
                  <span>8 days</span>
                  <span className="text-muted-foreground">Remaining:</span>
                  <span>12 days</span>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Sick Leave</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-muted-foreground">Total:</span>
                  <span>10 days</span>
                  <span className="text-muted-foreground">Used:</span>
                  <span>2 days</span>
                  <span className="text-muted-foreground">Remaining:</span>
                  <span>8 days</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

