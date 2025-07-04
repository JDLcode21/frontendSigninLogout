import { Separator } from "@/components/ui/separator"
import { SettingsSidebarNav } from "./settings-sidebar-nav"
import { SettingsProvider } from "@/contexts/settings-context"

export default function SettingsLayout({ children }) {
  return (
    <SettingsProvider>
      <div className="space-y-6 p-10 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your global settings, security, and system parameters.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="lg:w-1/5">
            <SettingsSidebarNav />
          </aside>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </SettingsProvider>
  )
}

