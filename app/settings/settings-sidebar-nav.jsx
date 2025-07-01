'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Globe2, Shield, Settings2, Users } from 'lucide-react'

const settingsNavItems = [
  {
    title: "Global Settings",
    href: "/settings/global",
    icon: Globe2,
  },
  {
    title: "Security & Access",
    href: "/settings/security",
    icon: Shield,
  },
  {
    title: "System Parameters",
    href: "/settings/system",
    icon: Settings2,
  },
  {
    title: "ESS/MSS Settings",
    href: "/settings/ess-mss",
    icon: Users,
  }
]

export function SettingsSidebarNav() {
  const pathname = usePathname()

  return (
    <nav 
      className="flex flex-col space-y-2"
      aria-label="Settings navigation"
      role="navigation"
    >
      {settingsNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
          aria-current={pathname === item.href ? "page" : undefined}
        >
          <item.icon className="mr-2 h-4 w-4" aria-hidden="true" />
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

