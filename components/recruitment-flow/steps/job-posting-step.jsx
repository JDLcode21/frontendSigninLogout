'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText } from 'lucide-react'
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Briefcase, Upload, DollarSign, MapPin, Clock, Users } from 'lucide-react'

export function JobPostingStep({ onComplete }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-medium">Job Posting Details</h3>
          <p className="text-sm text-muted-foreground">
            Fill in the required information to create a job posting
          </p>
        </div>
        <Link href="/recruitment/forms#job-posting">
          <Button variant="outline" size="sm">
            <FileText className="mr-2 h-4 w-4" />
            View Required Fields
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="details" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="details">Basic Details</TabsTrigger>
        <TabsTrigger value="requirements">Requirements</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="details" className="space-y-6 py-4">
        <div className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title</Label>
              <Input id="title" placeholder="e.g. Senior Software Engineer" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="hr">Human Resources</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="type">Employment Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full Time</SelectItem>
                  <SelectItem value="part-time">Part Time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="e.g. New York, NY (Remote)" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="salary">Salary Range</Label>
              <Input id="salary" placeholder="e.g. $80,000 - $100,000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Experience Level</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entry">Entry Level</SelectItem>
                  <SelectItem value="mid">Mid Level</SelectItem>
                  <SelectItem value="senior">Senior Level</SelectItem>
                  <SelectItem value="lead">Lead</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Job Description</Label>
            <Textarea
              id="description"
              placeholder="Enter detailed job description"
              className="min-h-[150px]"
            />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="requirements" className="space-y-6 py-4">
        <div className="grid gap-6">
          <div className="space-y-2">
            <Label htmlFor="skills">Required Skills</Label>
            <Textarea
              id="skills"
              placeholder="Enter required skills and technologies"
              className="min-h-[100px]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="qualifications">Qualifications</Label>
            <Textarea
              id="qualifications"
              placeholder="Enter required qualifications and certifications"
              className="min-h-[100px]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="responsibilities">Key Responsibilities</Label>
            <Textarea
              id="responsibilities"
              placeholder="Enter key responsibilities and duties"
              className="min-h-[100px]"
            />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="preview" className="py-4">
        <div className="rounded-lg border bg-card p-6 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Senior Software Engineer</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">
                <Briefcase className="mr-1 h-3 w-3" />
                Full Time
              </Badge>
              <Badge variant="secondary">
                <MapPin className="mr-1 h-3 w-3" />
                New York, NY
              </Badge>
              <Badge variant="secondary">
                <DollarSign className="mr-1 h-3 w-3" />
                $80k - $100k
              </Badge>
              <Badge variant="secondary">
                <Clock className="mr-1 h-3 w-3" />
                Senior Level
              </Badge>
              <Badge variant="secondary">
                <Users className="mr-1 h-3 w-3" />
                Engineering
              </Badge>
            </div>
          </div>

          <div className="prose prose-sm max-w-none">
            <h4 className="text-base font-semibold">About the Role</h4>
            <p>Job description preview will appear here...</p>

            <h4 className="text-base font-semibold">Requirements</h4>
            <p>Requirements preview will appear here...</p>

            <h4 className="text-base font-semibold">Responsibilities</h4>
            <p>Responsibilities preview will appear here...</p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
      <div className="flex space-x-2">
        <Button variant="outline">
          <FileText className="mr-2 h-4 w-4" />
          Save as Draft
        </Button>
        <Button onClick={() => onComplete()}>
          Create Job Posting
        </Button>
      </div>
    </div>
  )
}

