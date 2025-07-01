import { Separator } from "@/components/ui/separator"
import { RecruitmentProvider } from "@/components/recruitment-flow/recruitment-context"
import { RecruitmentHeader } from "@/components/recruitment-flow/recruitment-header"
import { NotificationPanel } from "@/components/recruitment-flow/notification-panel"
import { SequenceFlow } from "@/components/recruitment-flow/sequence-flow"

export default function RecruitmentFlowLayout({ children }) {
  return (
    <RecruitmentProvider>
      <div className="space-y-6 p-6 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Recruitment Process</h2>
          <p className="text-muted-foreground">
            Manage the entire recruitment lifecycle from job posting to employee onboarding.
          </p>
        </div>
        <Separator className="my-6" />
        <RecruitmentHeader />
        <div className="flex gap-6">
          <div className="flex-1">
            <SequenceFlow />
          </div>
          <div className="w-80">
            <NotificationPanel />
          </div>
        </div>
      </div>
    </RecruitmentProvider>
  )
}

