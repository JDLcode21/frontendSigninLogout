import { ModuleForm } from "@/app/components/forms/module-form"

const recruitmentFields = {
  "Job Posting": {
    required: [
      {
        name: "title",
        label: "Title",
        type: "text",
        placeholder: "Enter job title"
      },
      {
        name: "department",
        label: "Department",
        type: "select",
        options: [
          { value: "engineering", label: "Engineering" },
          { value: "hr", label: "Human Resources" },
          { value: "finance", label: "Finance" }
        ]
      },
      {
        name: "positionType",
        label: "Position Type",
        type: "select",
        options: [
          { value: "full-time", label: "Full Time" },
          { value: "part-time", label: "Part Time" },
          { value: "contract", label: "Contract" }
        ]
      },
      {
        name: "salaryRange",
        label: "Salary Range",
        type: "text",
        placeholder: "e.g. $50,000 - $70,000"
      }
    ],
    optional: [
      {
        name: "perks",
        label: "Additional Perks",
        type: "text",
        placeholder: "Enter additional perks"
      },
      {
        name: "flexibleHours",
        label: "Flexible Hours",
        type: "select",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" }
        ]
      }
    ]
  },
  "Candidate Profile": {
    required: [
      {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "Enter full name"
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter email address"
      },
      {
        name: "phone",
        label: "Phone",
        type: "tel",
        placeholder: "Enter phone number"
      },
      {
        name: "resume",
        label: "Resume",
        type: "file",
        placeholder: "Upload resume"
      }
    ],
    optional: [
      {
        name: "coverLetter",
        label: "Cover Letter",
        type: "file",
        placeholder: "Upload cover letter"
      },
      {
        name: "linkedin",
        label: "LinkedIn URL",
        type: "url",
        placeholder: "Enter LinkedIn profile URL"
      },
      {
        name: "portfolio",
        label: "Portfolio Link",
        type: "url",
        placeholder: "Enter portfolio website URL"
      }
    ]
  },
  "Offer Management": {
    required: [
      {
        name: "position",
        label: "Position",
        type: "text",
        placeholder: "Enter position title"
      },
      {
        name: "offerTemplate",
        label: "Offer Letter Template",
        type: "select",
        options: [
          { value: "standard", label: "Standard Offer" },
          { value: "executive", label: "Executive Offer" },
          { value: "contract", label: "Contract Offer" }
        ]
      },
      {
        name: "startDate",
        label: "Proposed Start Date",
        type: "date",
        placeholder: "Select start date"
      }
    ],
    optional: [
      {
        name: "bonus",
        label: "Bonus",
        type: "text",
        placeholder: "Enter bonus details"
      },
      {
        name: "stockOptions",
        label: "Stock Options",
        type: "text",
        placeholder: "Enter stock options details"
      }
    ]
  }
}

export default function RecruitmentFormsPage() {
  return (
    <div className="space-y-8">
      <ModuleForm 
        module="E-Recruitment Module" 
        sections={recruitmentFields} 
      />
    </div>
  )
}

