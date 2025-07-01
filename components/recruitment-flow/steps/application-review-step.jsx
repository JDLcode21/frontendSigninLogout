'use client'

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, UserPlus } from 'lucide-react'

export function ApplicationReviewStep() {
  const applications = [
    {
      id: 1,
      name: "John Smith",
      role: "Senior Developer",
      experience: "5 years",
      status: "Shortlisted",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Senior Developer",
      experience: "7 years",
      status: "Under Review",
    },
  ]

  return (
    <div className="space-y-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Candidate</TableHead>
            <TableHead>Applied Role</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((application) => (
            <TableRow key={application.id}>
              <TableCell>{application.name}</TableCell>
              <TableCell>{application.role}</TableCell>
              <TableCell>{application.experience}</TableCell>
              <TableCell>
                <Badge variant={application.status === "Shortlisted" ? "default" : "secondary"}>
                  {application.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <XCircle className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

