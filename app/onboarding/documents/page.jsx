import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, AlertCircle } from 'lucide-react'

export default function DocumentRequirementsPage() {
  const requiredDocuments = [
    {
      title: "Identification Document",
      description: "Government-issued photo ID",
      required: true,
      formats: ["PDF", "JPG", "PNG"],
      examples: ["Passport", "Driver's License", "National ID Card"],
      notes: "Must be valid and not expired"
    },
    {
      title: "Proof of Address",
      description: "Recent document showing current address",
      required: true,
      formats: ["PDF", "JPG", "PNG"],
      examples: ["Utility Bill", "Bank Statement", "Lease Agreement"],
      notes: "Must be less than 3 months old"
    },
    {
      title: "Qualifications",
      description: "Educational and professional certificates",
      required: true,
      formats: ["PDF"],
      examples: ["Degree Certificates", "Professional Certifications", "Training Certificates"],
      notes: "Must be certified copies if applicable"
    },
    {
      title: "Tax Documentation",
      description: "Tax identification and related documents",
      required: true,
      formats: ["PDF"],
      examples: ["Tax ID Card", "Tax Declaration Form", "Tax Residency Certificate"],
      notes: "Must be current tax year"
    }
  ]

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Document Requirements</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {requiredDocuments.map((doc) => (
          <Card key={doc.title}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    {doc.title}
                  </CardTitle>
                  <CardDescription>{doc.description}</CardDescription>
                </div>
                {doc.required && (
                  <Badge>Required</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold">Accepted Formats</h4>
                  <div className="flex gap-2 mt-1">
                    {doc.formats.map((format) => (
                      <Badge key={format} variant="secondary">
                        {format}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Examples</h4>
                  <ul className="mt-1 text-sm text-muted-foreground">
                    {doc.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </div>
                {doc.notes && (
                  <div className="flex items-start gap-2 rounded-md bg-muted p-2">
                    <AlertCircle className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">{doc.notes}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

