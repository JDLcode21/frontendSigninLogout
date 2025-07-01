'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle } from 'lucide-react'

export function PositionAssignmentStep() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="position">Position Title</Label>
          <Input id="position" value="Senior Developer" disabled />
        </div>
        <div className="space-y-2">
          <Label htmlFor="reporting-to">Reporting To</Label>
          <Select>
            <SelectTrigger id="reporting-to">
              <SelectValue placeholder="Select manager" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Engineering Manager</SelectItem>
              <SelectItem value="2">Technical Lead</SelectItem>
              <SelectItem value="3">Project Manager</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="team">Team</Label>
          <Select>
            <SelectTrigger id="team">
              <SelectValue placeholder="Select team" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="frontend">Frontend Team</SelectItem>
              <SelectItem value="backend">Backend Team</SelectItem>
              <SelectItem value="mobile">Mobile Team</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Work Location</Label>
          <Input id="location" placeholder="Enter work location" />
        </div>
      </div>

      <Button className="w-full">
        <CheckCircle className="mr-2 h-4 w-4" />
        Confirm Assignment
      </Button>
    </div>
  )
}

