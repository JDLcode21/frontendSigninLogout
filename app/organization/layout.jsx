import { StepFormProvider } from "@/contexts/step-form-context"
import { ModuleProvider } from "@/contexts/module-context"

export default function OrganizationLayout({ children }) {
  return (
    <ModuleProvider>
      <StepFormProvider totalSteps={3}>
        <div className="space-y-6 p-10 pb-16">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">Organization Management</h2>
            <p className="text-muted-foreground">
              Manage departments, positions, and organizational structure.
            </p>
          </div>
          <div className="flex-1">
            {children}
          </div>
        </div>
      </StepFormProvider>
    </ModuleProvider>
  )
}

