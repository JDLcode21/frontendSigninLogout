import { PersonnelAdminFlow } from "@/components/personnel/personnel-admin-flow"

export default function PersonnelPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Personnel Administration</h2>
      </div>
      <PersonnelAdminFlow />
    </div>
  )
}

