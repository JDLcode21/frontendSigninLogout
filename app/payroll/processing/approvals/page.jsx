'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, XCircle, AlertTriangle, FileText, UserCheck } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

// In a real app, this would come from an API
const approvalsData = [
  {
    id: 1,
    period: "January 2024",
    type: "Regular Payroll",
    amount: "$450,000",
    employees: 150,
    requestedBy: "John Smith",
    requestDate: "2024-01-15",
    approvalLevel: "First Level",
    status: "Pending",
    urgency: "High"
  },
  {
    id: 2,
    period: "January 2024",
    type: "Contractor Payments",
    amount: "$125,000",
    employees: 45,
    requestedBy: "Sarah Johnson",
    requestDate: "2024-01-15",
    approvalLevel: "Second Level",
    status: "Pending",
    urgency: "Medium"
  },
  {
    id: 3,
    period: "Q4 2023",
    type: "Bonus Payout",
    amount: "$225,000",
    employees: 75,
    requestedBy: "Mike Wilson",
    requestDate: "2024-01-16",
    approvalLevel: "Final Level",
    status: "Pending",
    urgency: "Low"
  }
]

export default function ApprovalsPage() {
  const [selectedApproval, setSelectedApproval] = useState(null)
  const [approvalAction, setApprovalAction] = useState(null)
  const [comments, setComments] = useState("")

  const getUrgencyBadge = (urgency) => {
    const variants = {
      "High": "destructive",
      "Medium": "warning",
      "Low": "default"
    }
    return <Badge variant={variants[urgency]}>{urgency}</Badge>
  }

  const handleAction = (approval, action) => {
    setSelectedApproval(approval)
    setApprovalAction(action)
  }

  const handleConfirm = () => {
    // In a real app, this would make an API call
    console.log({
      approvalId: selectedApproval.id,
      action: approvalAction,
      comments
    })
    setSelectedApproval(null)
    setApprovalAction(null)
    setComments("")
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Payroll Approvals</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Approvals
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{approvalsData.length}</div>
            <p className="text-xs text-muted-foreground">
              Requiring your attention
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              High Priority
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {approvalsData.filter(a => a.urgency === "High").length}
            </div>
            <p className="text-xs text-muted-foreground">
              Urgent approvals needed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Amount
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$800,000</div>
            <p className="text-xs text-muted-foreground">
              Pending approval value
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Employees
            </CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">270</div>
            <p className="text-xs text-muted-foreground">
              Total affected employees
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Pending Approvals</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Period</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Requested By</TableHead>
                <TableHead>Request Date</TableHead>
                <TableHead>Approval Level</TableHead>
                <TableHead>Urgency</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {approvalsData.map((approval) => (
                <TableRow key={approval.id}>
                  <TableCell className="font-medium">{approval.period}</TableCell>
                  <TableCell>{approval.type}</TableCell>
                  <TableCell>{approval.amount}</TableCell>
                  <TableCell>{approval.requestedBy}</TableCell>
                  <TableCell>{approval.requestDate}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{approval.approvalLevel}</Badge>
                  </TableCell>
                  <TableCell>{getUrgencyBadge(approval.urgency)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="text-green-500 hover:text-green-600"
                        onClick={() => handleAction(approval, 'approve')}
                      >
                        <CheckCircle className="h-4 w-4" />
                        <span className="sr-only">Approve</span>
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="text-red-500 hover:text-red-600"
                        onClick={() => handleAction(approval, 'reject')}
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

      <Dialog open={!!selectedApproval} onOpenChange={() => setSelectedApproval(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {approvalAction === 'approve' ? 'Approve' : 'Reject'} Payroll Run
            </DialogTitle>
            <DialogDescription>
              {approvalAction === 'approve'
                ? 'Are you sure you want to approve this payroll run?'
                : 'Please provide a reason for rejecting this payroll run.'}
            </DialogDescription>
          </DialogHeader>

          {selectedApproval && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Period</p>
                  <p className="text-sm text-muted-foreground">{selectedApproval.period}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Amount</p>
                  <p className="text-sm text-muted-foreground">{selectedApproval.amount}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Employees</p>
                  <p className="text-sm text-muted-foreground">{selectedApproval.employees}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Requested By</p>
                  <p className="text-sm text-muted-foreground">{selectedApproval.requestedBy}</p>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="comments">Comments</Label>
                <Textarea
                  id="comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder={approvalAction === 'approve' 
                    ? "Add any approval comments (optional)"
                    : "Please provide a reason for rejection"}
                  required={approvalAction === 'reject'}
                />
              </div>
            </div>
          )}

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setSelectedApproval(null)}
            >
              Cancel
            </Button>
            <Button
              variant={approvalAction === 'approve' ? 'default' : 'destructive'}
              onClick={handleConfirm}
              disabled={approvalAction === 'reject' && !comments}
            >
              {approvalAction === 'approve' ? 'Approve' : 'Reject'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

