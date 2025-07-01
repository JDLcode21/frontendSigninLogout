import { RecruitmentStepper } from "@/components/recruitment-flow/recruitment-stepper"
import { Button } from "@/components/ui/button"
import { FileText } from 'lucide-react'
import Link from "next/link"

export default function RecruitmentFlowPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Recruitment Process</h2>
        <Link href="/recruitment/forms">
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            View Form Fields
          </Button>
        </Link>
      </div>
      <RecruitmentStepper />
    </div>
  )
}

