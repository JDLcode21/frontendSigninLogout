'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Mail, Phone, MapPin, Building2, Calendar, FileText, Download } from 'lucide-react'

export default function EmployeeProfilePage({ params }) {
  const employeeData = {
    id: params.id,
    name: "John Smith",
    position: "Senior Software Engineer",
    department: "Engineering",
    email: "john.smith@example.com",
    phone: "+1 234 567 8900",
    location: "New York, NY",
    joinDate: "2022-03-15",
    status: "Active",
    manager: "Sarah Johnson",
    personalInfo: {
      dateOfBirth: "1990-05-15",
      nationality: "American",
      maritalStatus: "Married",
      address: "123 Main St, New York, NY 10001",
    },
    documents: [
      {
        id: 1,
        name: "Employment Contract",
        type: "PDF",
        uploadDate: "2022-03-15",
      },
      {
        id: 2,
        name: "Visa Documents",
        type: "PDF",
        uploadDate: "2022-03-15",
      },
    ],
    contracts: [
      {
        id: 1,
        type: "Permanent",
        startDate: "2022-03-15",
        salary: "$120,000",
        status: "Active",
      }
    ],
    leaves: [
      {
        id: 1,
        type: "Annual Leave",
        startDate: "2024-02-01",
        endDate: "2024-02-05",
        status: "Approved",
        days: 5,
      }
    ]
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{employeeData.name}</h2>
          <div className="flex items-center space-x-2 mt-2">
            <Badge variant="secondary">{employeeData.position}</Badge>
            <Badge variant="secondary">{employeeData.department}</Badge>
            <Badge>{employeeData.status}</Badge>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                <span>{employeeData.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <span>{employeeData.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                <span>{employeeData.location}</span>
              </div>
              <div className="flex items-center">
                <Building2 className="mr-2 h-4 w-4" />
                <span>Reports to: {employeeData.manager}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Joined: {employeeData.joinDate}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <Tabs defaultValue="personal" className="w-full">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Employee Information</CardTitle>
                <TabsList>
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                  <TabsTrigger value="contracts">Contracts</TabsTrigger>
                  <TabsTrigger value="leaves">Leave History</TabsTrigger>
                </TabsList>
              </div>
            </CardHeader>
            <CardContent>
              <TabsContent value="personal">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Date of Birth</label>
                    <p>{employeeData.personalInfo.dateOfBirth}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Nationality</label>
                    <p>{employeeData.personalInfo.nationality}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Marital Status</label>
                    <p>{employeeData.personalInfo.maritalStatus}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Address</label>
                    <p>{employeeData.personalInfo.address}</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="documents">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Upload Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {employeeData.documents.map((doc) => (
                      <TableRow key={doc.id}>
                        <TableCell>{doc.name}</TableCell>
                        <TableCell>{doc.type}</TableCell>
                        <TableCell>{doc.uploadDate}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="contracts">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead>Salary</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {employeeData.contracts.map((contract) => (
                      <TableRow key={contract.id}>
                        <TableCell>{contract.type}</TableCell>
                        <TableCell>{contract.startDate}</TableCell>
                        <TableCell>{contract.salary}</TableCell>
                        <TableCell>{contract.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>

              <TabsContent value="leaves">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead>End Date</TableHead>
                      <TableHead>Days</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {employeeData.leaves.map((leave) => (
                      <TableRow key={leave.id}>
                        <TableCell>{leave.type}</TableCell>
                        <TableCell>{leave.startDate}</TableCell>
                        <TableCell>{leave.endDate}</TableCell>
                        <TableCell>{leave.days}</TableCell>
                        <TableCell>{leave.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}

