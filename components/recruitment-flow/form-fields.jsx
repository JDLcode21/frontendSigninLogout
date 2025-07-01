import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

export function FormFields() {
  const formFields = {
    "Job Posting": {
      required: [
        {
          name: "title",
          type: "text",
          label: "Job Title",
          description: "Title of the position"
        },
        {
          name: "department",
          type: "select",
          label: "Department",
          description: "Department for the position",
          options: ["Engineering", "Product", "Design", "HR"]
        },
        {
          name: "type",
          type: "select",
          label: "Employment Type",
          description: "Type of employment",
          options: ["Full-time", "Part-time", "Contract", "Internship"]
        },
        {
          name: "location",
          type: "text",
          label: "Location",
          description: "Job location or remote status"
        }
      ],
      optional: [
        {
          name: "salary",
          type: "text",
          label: "Salary Range",
          description: "Expected salary range"
        },
        {
          name: "benefits",
          type: "text",
          label: "Benefits",
          description: "Additional benefits offered"
        }
      ]
    },
    "Candidate Profile": {
      required: [
        {
          name: "fullName",
          type: "text",
          label: "Full Name",
          description: "Candidate's full name"
        },
        {
          name: "email",
          type: "email",
          label: "Email",
          description: "Primary contact email"
        },
        {
          name: "phone",
          type: "tel",
          label: "Phone",
          description: "Contact phone number"
        },
        {
          name: "resume",
          type: "file",
          label: "Resume",
          description: "CV/Resume document"
        }
      ],
      optional: [
        {
          name: "coverLetter",
          type: "file",
          label: "Cover Letter",
          description: "Supporting cover letter"
        },
        {
          name: "portfolio",
          type: "url",
          label: "Portfolio URL",
          description: "Link to online portfolio"
        }
      ]
    },
    "Offer Management": {
      required: [
        {
          name: "position",
          type: "text",
          label: "Position Title",
          description: "Official position title"
        },
        {
          name: "startDate",
          type: "date",
          label: "Start Date",
          description: "Expected start date"
        },
        {
          name: "salary",
          type: "number",
          label: "Salary",
          description: "Annual salary amount"
        }
      ],
      optional: [
        {
          name: "bonus",
          type: "text",
          label: "Bonus Structure",
          description: "Additional compensation details"
        },
        {
          name: "benefits",
          type: "text",
          label: "Benefits Package",
          description: "Additional benefits offered"
        }
      ]
    },
    "Hire Conversion": {
      required: [
        {
          name: "employeeId",
          type: "text",
          label: "Employee ID",
          description: "Unique employee identifier"
        },
        {
          name: "department",
          type: "select",
          label: "Department",
          description: "Assigned department",
          options: ["Engineering", "Product", "Design", "HR"]
        },
        {
          name: "reportingTo",
          type: "text",
          label: "Reporting Manager",
          description: "Direct supervisor"
        }
      ],
      optional: [
        {
          name: "workstation",
          type: "text",
          label: "Workstation",
          description: "Assigned workspace"
        },
        {
          name: "equipment",
          type: "text",
          label: "Equipment",
          description: "Assigned equipment details"
        }
      ]
    }
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Form Fields Reference</CardTitle>
        <CardDescription>
          Required and optional fields for each step of the recruitment process
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="Job Posting" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            {Object.keys(formFields).map((section) => (
              <TabsTrigger key={section} value={section}>
                {section}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(formFields).map(([section, fields]) => (
            <TabsContent key={section} value={section}>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-6">
                  {/* Required Fields */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium">Required Fields</h3>
                      <Badge>Required</Badge>
                    </div>
                    <div className="grid gap-4">
                      {fields.required.map((field) => (
                        <Card key={field.name}>
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="space-y-1">
                                <h4 className="font-medium">{field.label}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {field.description}
                                </p>
                              </div>
                              <Badge variant="outline">{field.type}</Badge>
                            </div>
                            {field.options && (
                              <div className="mt-2">
                                <p className="text-sm font-medium">Options:</p>
                                <div className="flex flex-wrap gap-2 mt-1">
                                  {field.options.map((option) => (
                                    <Badge key={option} variant="secondary">
                                      {option}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Optional Fields */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium">Optional Fields</h3>
                      <Badge variant="secondary">Optional</Badge>
                    </div>
                    <div className="grid gap-4">
                      {fields.optional.map((field) => (
                        <Card key={field.name}>
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="space-y-1">
                                <h4 className="font-medium">{field.label}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {field.description}
                                </p>
                              </div>
                              <Badge variant="outline">{field.type}</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

