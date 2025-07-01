'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Building2, DollarSign, PieChart, Plus } from 'lucide-react'

interface CostCenter {
  id: string
  code: string
  name: string
  budget: number
  allocated: number
  departments: string[]
  employees: number
}

const costCenters: CostCenter[] = [
  {
    id: "cc1",
    code: "CC001",
    name: "Engineering Operations",
    budget: 2000000,
    allocated: 1850000,
    departments: ["Engineering", "DevOps"],
    employees: 45
  },
  {
    id: "cc2",
    code: "CC002",
    name: "Product Development",
    budget: 1500000,
    allocated: 1200000,
    departments: ["Product", "Design"],
    employees: 30
  },
  {
    id: "cc3",
    code: "CC003",
    name: "Marketing & Sales",
    budget: 1000000,
    allocated: 950000,
    departments: ["Marketing", "Sales"],
    employees: 25
  },
  {
    id: "cc4",
    code: "CC004",
    name: "Corporate Services",
    budget: 800000,
    allocated: 750000,
    departments: ["HR", "Finance", "Legal"],
    employees: 20
  }
]

export function CostCenterAllocation() {
  const [selectedYear, setSelectedYear] = useState<string>("2024")

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const totalBudget = costCenters.reduce((sum, cc) => sum + cc.budget, 0)
  const totalAllocated = costCenters.reduce((sum, cc) => sum + cc.allocated, 0)
  const totalEmployees = costCenters.reduce((sum, cc) => sum + cc.employees, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">
          Cost Center Allocation
        </h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Cost Center
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalBudget)}</div>
            <Progress 
              value={(totalAllocated / totalBudget) * 100} 
              className="mt-2"
            />
            <p className="text-xs text-muted-foreground mt-2">
              {formatCurrency(totalAllocated)} allocated ({((totalAllocated / totalBudget) * 100).toFixed(1)}%)
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cost Centers</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{costCenters.length}</div>
            <p className="text-xs text-muted-foreground">
              Active cost centers
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Cost</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(totalAllocated / totalEmployees)}
            </div>
            <p className="text-xs text-muted-foreground">
              Per employee
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cost Center Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Allocated</TableHead>
                <TableHead>Remaining</TableHead>
                <TableHead>Utilization</TableHead>
                <TableHead>Departments</TableHead>
                <TableHead>Employees</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {costCenters.map((cc) => {
                const remaining = cc.budget - cc.allocated
                const utilization = (cc.allocated / cc.budget) * 100
                return (
                  <TableRow key={cc.id}>
                    <TableCell className="font-medium">{cc.code}</TableCell>
                    <TableCell>{cc.name}</TableCell>
                    <TableCell>{formatCurrency(cc.budget)}</TableCell>
                    <TableCell>{formatCurrency(cc.allocated)}</TableCell>
                    <TableCell>{formatCurrency(remaining)}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Progress value={utilization} className="w-[60px]" />
                        <span className="text-sm text-muted-foreground">
                          {utilization.toFixed(1)}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {cc.departments.map((dept) => (
                          <Badge key={dept} variant="secondary">
                            {dept}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>{cc.employees}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

