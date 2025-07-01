'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// In a real app, this would come from an API
const pendingRuns = [
  {
    id: 1,
    period: "January 2024",
    status: "Pending Approval",
    employees: 150,
    totalAmount: "$450,000",
    startDate: "2024-01-15",
    submittedBy: "John Smith",
    warnings: 2
  },
  {
    id: 2,
    period: "January 2024 (Contractors)",
    status: "Pending Calculation",
    employees: 45,
    totalAmount: "$125,000",
    startDate: "2024-01-15",
    submittedBy: "Sarah Johnson",
    warnings: 0
  },
  {
    id: 3,
    period: "January 2024 (Bonuses)",
    status: "Pending Review",
    employees: 75,
    totalAmount: "$225,000",
    startDate: "2024-01-16",
    submittedBy: "Mike Wilson",
    warnings: 1
  }
]

export default function PendingRunsPage() {
  const getStatusBadge = (status) => {
    const variants = {
      "Pending Approval": "warning",
      "Pending Calculation": "secondary",
      "Pending Review": "default"
    }
    return <Badge variant={variants[status] || "default"}>{status}</Badge>
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Pending Payroll Runs</h2>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Attention Required</AlertTitle>
        <AlertDescription>
          There are {pendingRuns.length} payroll runs pending action. Please review and process them according to their status.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle>Pending Runs</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Period</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>Employees</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Submitted By</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Warnings</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingRuns.map((run) => (
                <TableRow key={run.id}>
                  <TableCell className="font-medium">{run.period}</TableCell>
                  <TableCell>{run.startDate}</TableCell>
                  <TableCell>{run.employees}</TableCell>
                  <TableCell>{run.totalAmount}</TableCell>
                  <TableCell>{run.submittedBy}</TableCell>
                  <TableCell>{getStatusBadge(run.status)}</TableCell>
                  <TableCell>
                    {run.warnings > 0 ? (
                      <Badge variant="destructive">{run.warnings} Issues</Badge>
                    ) : (
                      <Badge variant="success">No Issues</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="text-green-500 hover:text-green-600"
                      >
                        <CheckCircle className="h-4 w-4" />
                        <span className="sr-only">Approve</span>
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="text-red-500 hover:text-red-600"
                      >
                        <XCircle className="h-4 w-4" />
                        <span className="sr-only">Reject</span>
                      </Button>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

