'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DollarSign, Users, Building2, ArrowRight, Plus } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SalaryGrade {
  id: string
  grade: string
  minSalary: number
  maxSalary: number
  midpoint: number
  employees: number
  departments: string[]
}

const salaryGrades: SalaryGrade[] = [
  {
    id: "g1",
    grade: "G1",
    minSalary: 30000,
    maxSalary: 45000,
    midpoint: 37500,
    employees: 25,
    departments: ["Operations", "Support"]
  },
  {
    id: "g2",
    grade: "G2",
    minSalary: 45000,
    maxSalary: 65000,
    midpoint: 55000,
    employees: 40,
    departments: ["Engineering", "Product", "Marketing"]
  },
  {
    id: "g3",
    grade: "G3",
    minSalary: 65000,
    maxSalary: 90000,
    midpoint: 77500,
    employees: 30,
    departments: ["Engineering", "Product", "Finance"]
  },
  {
    id: "g4",
    grade: "G4",
    minSalary: 90000,
    maxSalary: 120000,
    midpoint: 105000,
    employees: 15,
    departments: ["Engineering", "Product"]
  },
  {
    id: "g5",
    grade: "G5",
    minSalary: 120000,
    maxSalary: 160000,
    midpoint: 140000,
    employees: 8,
    departments: ["Executive"]
  }
]

export function SalaryStructureVisualization() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all")

  const filteredGrades = selectedDepartment === "all" 
    ? salaryGrades
    : salaryGrades.filter(grade => grade.departments.includes(selectedDepartment))

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">
          Salary Structure
        </h2>
        <div className="flex items-center space-x-4">
          <Select
            value={selectedDepartment}
            onValueChange={setSelectedDepartment}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="Engineering">Engineering</SelectItem>
              <SelectItem value="Product">Product</SelectItem>
              <SelectItem value="Marketing">Marketing</SelectItem>
              <SelectItem value="Finance">Finance</SelectItem>
              <SelectItem value="Operations">Operations</SelectItem>
              <SelectItem value="Support">Support</SelectItem>
              <SelectItem value="Executive">Executive</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Grade
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Grades</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{filteredGrades.length}</div>
            <p className="text-xs text-muted-foreground">
              Active salary grades
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Salary Range</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(Math.min(...filteredGrades.map(g => g.minSalary)))} - {formatCurrency(Math.max(...filteredGrades.map(g => g.maxSalary)))}
            </div>
            <p className="text-xs text-muted-foreground">
              Min-Max range
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {filteredGrades.reduce((sum, grade) => sum + grade.employees, 0)}
            </div>
            <p className="text-xs text-muted-foreground">
              Total employees in grades
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Salary Grades</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Grade</TableHead>
                <TableHead>Minimum</TableHead>
                <TableHead>Midpoint</TableHead>
                <TableHead>Maximum</TableHead>
                <TableHead>Range Spread</TableHead>
                <TableHead>Employees</TableHead>
                <TableHead>Departments</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredGrades.map((grade) => {
                const spread = ((grade.maxSalary - grade.minSalary) / grade.minSalary * 100).toFixed(0)
                return (
                  <TableRow key={grade.id}>
                    <TableCell className="font-medium">{grade.grade}</TableCell>
                    <TableCell>{formatCurrency(grade.minSalary)}</TableCell>
                    <TableCell>{formatCurrency(grade.midpoint)}</TableCell>
                    <TableCell>{formatCurrency(grade.maxSalary)}</TableCell>
                    <TableCell>{spread}%</TableCell>
                    <TableCell>{grade.employees}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {grade.departments.map((dept) => (
                          <Badge key={dept} variant="secondary">
                            {dept}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Grade Progression</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            {filteredGrades.map((grade, index) => (
              <div key={grade.id} className="flex items-center">
                <div className="text-center">
                  <div className="font-medium mb-1">{grade.grade}</div>
                  <div className="text-sm text-muted-foreground">
                    {formatCurrency(grade.minSalary)}
                  </div>
                </div>
                {index < filteredGrades.length - 1 && (
                  <ArrowRight className="h-4 w-4 mx-2 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

