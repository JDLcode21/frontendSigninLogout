import { ModuleForm } from "@/app/components/forms/module-form"

const organizationFields = {
  "Organizational Unit": {
    required: [
      {
        name: "unitName",
        label: "Unit Name",
        type: "text",
        placeholder: "Enter unit name"
      },
      {
        name: "effectiveDate",
        label: "Effective Date",
        type: "date",
        placeholder: "Select effective date"
      }
    ],
    optional: [
      {
        name: "description",
        label: "Description",
        type: "text",
        placeholder: "Enter unit description"
      },
      {
        name: "costCenter",
        label: "Cost Center Info",
        type: "text",
        placeholder: "Enter cost center details"
      }
    ]
  },
  "Positions": {
    required: [
      {
        name: "positionTitle",
        label: "Position Title",
        type: "text",
        placeholder: "Enter position title"
      },
      {
        name: "reportsTo",
        label: "Reports To",
        type: "text",
        placeholder: "Enter position ID"
      }
    ],
    optional: [
      {
        name: "grade",
        label: "Grade",
        type: "text",
        placeholder: "Enter grade level"
      },
      {
        name: "jobCode",
        label: "Job Code",
        type: "text",
        placeholder: "Enter job code"
      }
    ]
  },
  "Job Classification": {
    required: [
      {
        name: "jobFamily",
        label: "Job Family",
        type: "text",
        placeholder: "Enter job family"
      },
      {
        name: "jobTitle",
        label: "Job Title",
        type: "text",
        placeholder: "Enter job title"
      }
    ],
    optional: [
      {
        name: "payScale",
        label: "Pay Scale",
        type: "text",
        placeholder: "Enter pay scale"
      },
      {
        name: "responsibilities",
        label: "Responsibilities",
        type: "text",
        placeholder: "Enter responsibilities"
      }
    ]
  }
}

export default function OrganizationFormsPage() {
  return (
    <div className="space-y-8">
      <ModuleForm 
        module="Organizational Management Module" 
        sections={organizationFields} 
      />
    </div>
  )
}

