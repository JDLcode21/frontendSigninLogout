'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ModalForm } from "@/components/shared/modal-form"
import { StepFormProvider } from "@/contexts/step-form-context"
import { LeaveRequestForm } from "./forms/leave-request-form"
import { LeaveDetailsForm } from "./forms/leave-details-form"
import { LeaveValidationForm } from "./forms/leave-validation-form"
import { AttendanceEntryForm } from "./forms/attendance-entry-form"
import { AttendanceDetailsForm } from "./forms/attendance-details-form"
import { AttendanceValidationForm } from "./forms/attendance-validation-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock } from 'lucide-react'

const leaveSteps = [
  {
    title: "Leave Request",
    component: LeaveRequestForm,
  },
  {
    title: "Leave Details",
    component: LeaveDetailsForm,
  },
  {
    title: "Review & Submit",
    component: LeaveValidationForm,
  },
]

const attendanceSteps = [
  {
    title: "Attendance Entry",
    component: AttendanceEntryForm,
  },
  {
    title: "Time Details",
    component: AttendanceDetailsForm,
  },
  {
    title: "Review & Submit",
    component: AttendanceValidationForm,
  },
]

export function TimeManagementFlow() {
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false)
  const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false)

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Request Leave</CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={() => setIsLeaveModalOpen(true)}
            className="w-full"
          >
            <Calendar className="mr-2 h-4 w-4" />
            New Leave Request
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Record Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={() => setIsAttendanceModalOpen(true)}
            className="w-full"
          >
            <Clock className="mr-2 h-4 w-4" />
            Record Time
          </Button>
        </CardContent>
      </Card>

      <StepFormProvider totalSteps={leaveSteps.length}>
        <ModalForm
          open={isLeaveModalOpen}
          onOpenChange={setIsLeaveModalOpen}
          title="Submit Leave Request"
          steps={leaveSteps}
        />
      </StepFormProvider>

      <StepFormProvider totalSteps={attendanceSteps.length}>
        <ModalForm
          open={isAttendanceModalOpen}
          onOpenChange={setIsAttendanceModalOpen}
          title="Record Attendance"
          steps={attendanceSteps}
        />
      </StepFormProvider>
    </div>
  )
}

