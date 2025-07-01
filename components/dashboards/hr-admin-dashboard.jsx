import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Briefcase, Clock, FileText, Building2, CreditCard } from 'lucide-react'

export function HRAdminDashboard() {
  const stats = [
    {
      title: "Total Employees",
      value: "1,234",
      change: "+12 from last month",
      icon: Users
    },
    {
      title: "Open Positions",
      value: "23",
      change: "4 in final stage",
      icon: Briefcase
    },
    {
      title: "Departments",
      value: "8",
      change: "2 restructuring",
      icon: Building2
    },
    {
      title: "Payroll Status",
      value: "Active",
      change: "Next run in 5 days",
      icon: CreditCard
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">HR Admin Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

