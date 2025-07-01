import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe2, Shield, Settings2, Users } from 'lucide-react'
import Link from "next/link"

const settingsModules = [
  {
    title: "Global Settings",
    description: "Configure time zone, language, and regional preferences",
    icon: Globe2,
    href: "/settings/global"
  },
  {
    title: "Security & Access",
    description: "Manage authentication, sessions, and access control",
    icon: Shield,
    href: "/settings/security"
  },
  {
    title: "System Parameters",
    description: "Configure system-wide parameters and integrations",
    icon: Settings2,
    href: "/settings/system"
  },
  {
    title: "ESS/MSS Settings",
    description: "Configure employee and manager self-service options",
    icon: Users,
    href: "/settings/ess-mss"
  }
]

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {settingsModules.map((module) => (
          <Card key={module.href} className="hover:shadow-lg transition-shadow">
            <Link href={module.href}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <module.icon className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <CardTitle>{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-start">
                  Configure Settings
                </Button>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}

