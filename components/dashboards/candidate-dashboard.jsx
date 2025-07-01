import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search } from 'lucide-react'

export function CandidateDashboard() {
  const applications = [
    {
      position: "Senior Developer",
      company: "Tech Corp",
      status: "Under Review",
      appliedDate: "2024-01-15",
      nextStep: "Technical Interview"
    },
    {
      position: "Lead Engineer",
      company: "Innovation Inc",
      status: "Interview Scheduled",
      appliedDate: "2024-01-10",
      nextStep: "HR Interview - Jan 20"
    }
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Candidate Dashboard</h2>
      <div className="flex justify-end">
        <Button>
          <Search className="mr-2 h-4 w-4" />
          Browse Jobs
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>My Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Position</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Applied Date</TableHead>
                <TableHead>Next Step</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((application) => (
                <TableRow key={application.position + application.company}>
                  <TableCell>{application.position}</TableCell>
                  <TableCell>{application.company}</TableCell>
                  <TableCell>{application.status}</TableCell>
                  <TableCell>{application.appliedDate}</TableCell>
                  <TableCell>{application.nextStep}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

