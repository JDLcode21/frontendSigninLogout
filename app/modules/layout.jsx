import { Separator } from "@/components/ui/separator"
import { ModuleNav } from "./module-nav"
import { ModuleProvider } from "@/contexts/module-context"

export default function ModuleLayout({ children }) {
  return (
    <ModuleProvider>
      <div className="space-y-6 p-10 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Module Management</h2>
          <p className="text-muted-foreground">
            Access and manage different HR modules based on your role.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="lg:w-1/5">
            <ModuleNav />
          </aside>
          <div className="flex-1">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </ModuleProvider>
  )
}

