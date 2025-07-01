'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight } from 'lucide-react'

export default function AttendancePage() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  // Example attendance data
  const attendanceData = [
    {
      date: "2024-01-15",
      clockIn: "09:00",
      clockOut: "17:30",
      status: "present",
      totalHours: "8.5"
    },
    {
      date: "2024-01-16",
      clockIn: "08:45",
      clockOut: "17:15",
      status: "present",
      totalHours: "8.5"
    },
    // Add more attendance records as needed
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Attendance Tracking</h1>
        <Button>
          <Clock className="mr-2 h-4 w-4" />
          Clock In/Out
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_300px]">
        <Card>
          <CardHeader>
            <CardTitle>Attendance Records</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Clock In</TableHead>
                  <TableHead>Clock Out</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Total Hours</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendanceData.map((record) => (
                  <TableRow key={record.date}>
                    <TableCell>{record.date}</TableCell>
                    <TableCell>{record.clockIn}</TableCell>
                    <TableCell>{record.clockOut}</TableCell>
                    <TableCell>
                      <Badge variant={record.status === 'present' ? 'default' : 'secondary'}>
                        {record.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{record.totalHours}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <span className="text-muted-foreground">Today's Status:</span>
                <Badge>Present</Badge>
                <span className="text-muted-foreground">Clock In:</span>
                <span>09:00 AM</span>
                <span className="text-muted-foreground">Expected Hours:</span>
                <span>8 hours</span>
                <span className="text-muted-foreground">Overtime:</span>
                <span>0.5 hours</span>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-medium mb-2">This Week</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Hours Worked</span>
                    <span className="font-medium">34 / 40</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Days Present</span>
                    <span className="font-medium">4 / 5</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

