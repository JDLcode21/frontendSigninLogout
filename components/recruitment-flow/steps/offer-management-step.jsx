'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send, Download } from 'lucide-react'

export function OfferManagementStep() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="candidate">Selected Candidate</Label>
          <Input id="candidate" value="John Smith" disabled />
        </div>
        <div className="space-y-2">
          <Label htmlFor="position">Position</Label>
          <Input id="position" value="Senior Developer" disabled />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="salary">Offered Salary</Label>
          <Input id="salary" placeholder="Enter offered salary" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="start-date">Start Date</Label>
          <Input id="start-date" type="date" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="offer-details">Offer Details</Label>
        <Textarea
          id="offer-details"
          placeholder="Enter additional offer details"
          className="min-h-[100px]"
        />
      </div>

      <div className="flex space-x-2">
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download Draft
        </Button>
        <Button>
          <Send className="mr-2 h-4 w-4" />
          Send Offer
        </Button>
      </div>
    </div>
  )
}

