import { ModuleForm } from "@/app/components/forms/module-form"

const payrollFields = {
  "Bank Information": {
    required: [
      {
        name: "bankName",
        label: "Bank Name",
        type: "text",
        placeholder: "Enter bank name"
      },
      {
        name: "accountNumber",
        label: "Account Number/IBAN",
        type: "text",
        placeholder: "Enter account number or IBAN"
      },
      {
        name: "accountHolder",
        label: "Account Holder",
        type: "text",
        placeholder: "Enter account holder name"
      }
    ],
    optional: [
      {
        name: "swiftCode",
        label: "Swift Code",
        type: "text",
        placeholder: "Enter SWIFT code (if international)"
      },
      {
        name: "routingNumber",
        label: "Routing Number",
        type: "text",
        placeholder: "Enter routing number (if applicable)"
      }
    ]
  },
  "Compensation": {
    required: [
      {
        name: "basicSalary",
        label: "Basic Salary",
        type: "text",
        placeholder: "Enter basic salary"
      },
      {
        name: "payFrequency",
        label: "Pay Frequency",
        type: "select",
        options: [
          { value: "monthly", label: "Monthly" },
          { value: "bi-weekly", label: "Bi-weekly" },
          { value: "weekly", label: "Weekly" }
        ]
      }
    ],
    optional: [
      {
        name: "allowances",
        label: "Allowances",
        type: "text",
        placeholder: "Enter allowances"
      },
      {
        name: "deductions",
        label: "Deductions",
        type: "text",
        placeholder: "Enter deductions"
      }
    ]
  },
  "Tax & Compliance": {
    required: [
      {
        name: "taxCode",
        label: "Tax Code",
        type: "text",
        placeholder: "Enter tax code"
      },
      {
        name: "socialSecurity",
        label: "Social Security Info",
        type: "text",
        placeholder: "Enter social security information"
      }
    ],
    optional: [
      {
        name: "insurance",
        label: "Additional Insurance",
        type: "text",
        placeholder: "Enter additional insurance details"
      },
      {
        name: "retirementPlan",
        label: "Retirement Plans",
        type: "text",
        placeholder: "Enter retirement plan details"
      }
    ]
  }
}

export default function PayrollFormsPage() {
  return (
    <div className="space-y-8">
      <ModuleForm 
        module="Payroll Module" 
        sections={payrollFields} 
      />
    </div>
  )
}

