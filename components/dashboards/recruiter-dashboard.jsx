import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserPlus } from 'lucide-react'

export function RecruiterDashboard() {
  const openings = [
    {
      position: "Senior Developer",
      department: "Engineering",
      applications: 12,
      status: "Active",
    },
    {
      position: "Product Manager",
      department: "Product",
      applications: 8,
      status: "Active",
    },
    {
      position: "UX Designer",
      department: "Design",
      applications: 15,
      status: "Active",
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Recruiter Dashboard</h2>
      <div className="flex justify-end">
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Post New Position
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Active Job Openings</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Position</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Applications</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {openings.map((opening) => (
                <TableRow key={opening.position}>
                  <TableCell>{opening.position}</TableCell>
                  <TableCell>{opening.department}</TableCell>
                  <TableCell>{opening.applications}</TableCell>
                  <TableCell>{opening.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

