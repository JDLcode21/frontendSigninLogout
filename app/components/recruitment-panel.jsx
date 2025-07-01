import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle } from 'lucide-react'
import Link from "next/link"

export function RecruitmentPanel() {
  const openPositions = [
    {
      id: 1,
      position: "Senior Developer",
      department: "Engineering",
      applications: 12,
      status: "Open",
    },
    {
      id: 2,
      position: "HR Manager",
      department: "Human Resources",
      applications: 8,
      status: "Open",
    },
    {
      id: 3,
      position: "Product Designer",
      department: "Design",
      applications: 15,
      status: "Open",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold">Recruitment Dashboard</h3>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Post New Position
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Open Positions</CardTitle>
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
              {openPositions.map((position) => (
                <TableRow key={position.id}>
                  <TableCell>
                    <Link href={`/recruitment/applications/${position.id}`} className="hover:underline">
                      {position.position}
                    </Link>
                  </TableCell>
                  <TableCell>{position.department}</TableCell>
                  <TableCell>{position.applications}</TableCell>
                  <TableCell>{position.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

