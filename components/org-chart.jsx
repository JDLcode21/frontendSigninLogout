import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, UserPlus, Building2, Settings } from 'lucide-react'

export function OrgChart() {
  const departments = [
    {
      id: 1,
      name: "Engineering",
      head: "John Smith",
      employees: 45,
      positions: 48,
      vacancies: 3
    },
    {
      id: 2,
      name: "Human Resources",
      head: "Sarah Johnson",
      employees: 12,
      positions: 12,
      vacancies: 0
    },
    {
      id: 3,
      name: "Marketing",
      head: "Mike Wilson",
      employees: 18,
      positions: 20,
      vacancies: 2
    }
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Organizational Structure</h2>
        <div className="space-x-2">
          <Button variant="outline">
            <Building2 className="mr-2 h-4 w-4" />
            Add Department
          </Button>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Position
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept) => (
          <Card key={dept.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {dept.name}
              </CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dept.employees}</div>
              <p className="text-xs text-muted-foreground">
                Employees ({dept.vacancies} open positions)
              </p>
              <div className="mt-4 space-y-2">
                <div className="text-sm">
                  Department Head: {dept.head}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="mr-2 h-4 w-4" />
                  {dept.positions} Total Positions
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

