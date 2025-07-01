import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { UserPlus } from 'lucide-react'

export function PersonnelPanel() {
  const employees = [
    {
      id: 1,
      name: "John Doe",
      department: "Engineering",
      position: "Senior Developer",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      department: "HR",
      position: "HR Manager",
      status: "Active",
    },
    {
      id: 3,
      name: "Mike Johnson",
      department: "Design",
      position: "UI Designer",
      status: "On Leave",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">Personnel Management</h3>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Employee
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Employee Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{employee.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

