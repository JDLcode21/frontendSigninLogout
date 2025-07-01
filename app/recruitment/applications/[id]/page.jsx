'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar, Download, Mail, Phone, User } from 'lucide-react'

export default function JobApplicationsPage({ params }) {
  const jobDetails = {
    id: params.id,
    title: "Senior Software Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "New York, NY",
    applications: [
      {
        id: 1,
        candidate: "John Smith",
        email: "john.smith@example.com",
        phone: "+1 234 567 8900",
        status: "Screening",
        appliedDate: "2024-01-15",
        experience: "5 years",
        stage: "Technical Interview",
      },
      {
        id: 2,
        candidate: "Sarah Johnson",
        email: "sarah.j@example.com",
        phone: "+1 234 567 8901",
        status: "Shortlisted",
        appliedDate: "2024-01-14",
        experience: "7 years",
        stage: "HR Interview",
      },
    ]
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{jobDetails.title}</h2>
          <div className="flex items-center space-x-2 mt-2">
            <Badge variant="secondary">{jobDetails.department}</Badge>
            <Badge variant="secondary">{jobDetails.type}</Badge>
            <Badge variant="secondary">{jobDetails.location}</Badge>
          </div>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Applications
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Applications ({jobDetails.applications.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidate</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Experience</TableHead>
                <TableHead>Applied Date</TableHead>
                <TableHead>Current Stage</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobDetails.applications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      {application.candidate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Mail className="mr-2 h-4 w-4" />
                        {application.email}
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="mr-2 h-4 w-4" />
                        {application.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{application.experience}</TableCell>
                  <TableCell>{application.appliedDate}</TableCell>
                  <TableCell>{application.stage}</TableCell>
                  <TableCell>
                    <Select defaultValue={application.status}>
                      <SelectTrigger className="w-[130px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Screening">Screening</SelectItem>
                        <SelectItem value="Shortlisted">Shortlisted</SelectItem>
                        <SelectItem value="Interview">Interview</SelectItem>
                        <SelectItem value="Offer">Offer</SelectItem>
                        <SelectItem value="Rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">View CV</Button>
                      <Button size="sm">Schedule Interview</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

