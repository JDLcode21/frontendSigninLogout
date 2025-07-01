import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Calendar } from 'lucide-react'

export function TimeManagementPanel() {
  const leaveRequests = [
    {
      id: 1,
      employee: "John Doe",
      type: "Annual Leave",
      startDate: "2024-01-20",
      endDate: "2024-01-25",
      status: "Pending",
    },
    {
      id: 2,
      employee: "Jane Smith",
      type: "Sick Leave",
      startDate: "2024-01-18",
      endDate: "2024-01-19",
      status: "Approved",
    },
    {
      id: 3,
      employee: "Mike Johnson",
      type: "Personal Leave",
      startDate: "2024-01-22",
      endDate: "2024-01-23",
      status: "Pending",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">Time Management</h3>
        <Button>
          <Calendar className="mr-2 h-4 w-4" />
          Request Leave
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Leave Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaveRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>{request.employee}</TableCell>
                  <TableCell>{request.type}</TableCell>
                  <TableCell>{request.startDate}</TableCell>
                  <TableCell>{request.endDate}</TableCell>
                  <TableCell>{request.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

