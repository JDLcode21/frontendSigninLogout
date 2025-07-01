import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar, Clock, FileText } from 'lucide-react'

export function SelfServicePanel() {
  const requests = [
    {
      type: "Leave Request",
      submittedDate: "2024-01-15",
      status: "Pending",
      details: "Annual Leave: Feb 1-5"
    },
    {
      type: "Document Request",
      submittedDate: "2024-01-14",
      status: "Approved",
      details: "Employment Certificate"
    }
  ]

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Self Service Portal</h2>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Request Leave
          </Button>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Request Document
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request Type</TableHead>
                <TableHead>Submitted Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((request) => (
                <TableRow key={request.submittedDate + request.type}>
                  <TableCell>{request.type}</TableCell>
                  <TableCell>{request.submittedDate}</TableCell>
                  <TableCell>{request.status}</TableCell>
                  <TableCell>{request.details}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

