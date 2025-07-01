import { SelfServiceFlow } from "@/components/ess-mss/self-service-flow"

export default function ESSMSSPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Self Service Portal</h2>
      </div>
      <SelfServiceFlow />
    </div>
  )
}

