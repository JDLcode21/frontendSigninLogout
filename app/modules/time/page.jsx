import { TimeManagementFlow } from "@/components/time/time-management-flow"

export default function TimePage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Time Management</h2>
      </div>
      <TimeManagementFlow />
    </div>
  )
}

