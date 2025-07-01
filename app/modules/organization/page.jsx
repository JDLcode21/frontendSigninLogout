import { OrganizationFlow } from "@/components/organization/organization-flow"

export default function OrganizationPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Organization Management</h2>
      </div>
      <OrganizationFlow />
    </div>
  )
}

