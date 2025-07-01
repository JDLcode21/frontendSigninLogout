import { ModuleForm } from "@/app/components/forms/module-form"

const personnelFields = {
  "Personal Data": {
    required: [
      {
        name: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "Enter first name"
      },
      {
        name: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Enter last name"
      },
      {
        name: "dob",
        label: "Date of Birth",
        type: "date",
        placeholder: "Select date of birth"
      },
      {
        name: "nationalId",
        label: "National ID",
        type: "text",
        placeholder: "Enter national ID number"
      }
    ],
    optional: [
      {
        name: "middleName",
        label: "Middle Name",
        type: "text",
        placeholder: "Enter middle name"
      },
      {
        name: "preferredName",
        label: "Preferred Name",
        type: "text",
        placeholder: "Enter preferred name"
      }
    ]
  },
  "Contact Info": {
    required: [
      {
        name: "primaryAddress",
        label: "Primary Address",
        type: "text",
        placeholder: "Enter primary address"
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
      }
    ],
    optional: [
      {
        name: "secondaryAddress",
        label: "Secondary Address",
        type: "text",
        placeholder: "Enter secondary address"
      },
      {
        name: "emergencyContact",
        label: "Emergency Contact",
        type: "text",
        placeholder: "Enter emergency contact details"
      }
    ]
  },
  "Contract Details": {
    required: [
      {
        name: "startDate",
        label: "Start Date",
        type: "date",
        placeholder: "Select start date"
      },
      {
        name: "employmentType",
        label: "Employment Type",
        type: "select",
        options: [
          { value: "full-time", label: "Full Time" },
          { value: "part-time", label: "Part Time" },
          { value: "contract", label: "Contract" }
        ]
      },
      {
        name: "workHours",
        label: "Work Hours",
        type: "text",
        placeholder: "Enter work hours"
      }
    ],
    optional: [
      {
        name: "endDate",
        label: "End Date",
        type: "date",
        placeholder: "Select end date (if applicable)"
      },
      {
        name: "probationPeriod",
        label: "Probation Period",
        type: "text",
        placeholder: "Enter probation period"
      }
    ]
  }
}

export default function PersonnelFormsPage() {
  return (
    <div className="space-y-8">
      <ModuleForm 
        module="Personnel Administration Module" 
        sections={personnelFields} 
      />
    </div>
  )
}

