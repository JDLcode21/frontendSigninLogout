'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Calendar, Clock, FileText, Users, Settings } from 'lucide-react'

const timeNavItems = [
{
  title: "Calendar",
  href: "/time/calendar",
  icon: Calendar,
  description: "View and manage schedules"
},
{
  title: "Leave Management",
  href: "/time/leave",
  icon: FileText,
  description: "Request and approve leave",
  subItems: [
    {
      title: "Leave Requests",
      href: "/time/leave"
    },
    {
      title: "Request Leave",
      href: "/time/leave/request"
    }
  ]
},
{
  title: "Attendance",
  href: "/time/attendance",
  icon: Clock,
  description: "Track attendance and time"
},
{
  title: "Team Schedule",
  href: "/time/team",
  icon: Users,
  description: "View team availability"
},
{
  title: "Forms & Fields",
  href: "/time/forms",
  icon: Settings,
  description: "Configure time management forms",
  subItems: [
    {
      title: "Leave Request Fields",
      href: "/time/forms/leave-request"
    },
    {
      title: "Attendance Fields",
      href: "/time/forms/attendance"
    }
  ]
}
]

export function TimeManagementNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col space-y-2" role="navigation" aria-label="Time management">
      {timeNavItems.map((item) => (
        <div key={item.href} className="space-y-1">
          <Link
            href={item.href}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              pathname === item.href
                ? "bg-muted hover:bg-muted"
                : "hover:bg-transparent hover:underline",
              "justify-start w-full"
            )}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            <item.icon className="mr-2 h-4 w-4" aria-hidden="true" />
            <div className="flex flex-col items-start">
              <span>{item.title}</span>
              {item.description && (
                <span className="text-xs text-muted-foreground">{item.description}</span>
              )}
            </div>
          </Link>
          {item.subItems && (
            <div className="ml-6 space-y-1">
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    pathname === subItem.href
                      ? "bg-muted hover:bg-muted"
                      : "hover:bg-transparent hover:underline",
                    "justify-start w-full"
                  )}
                  aria-current={pathname === subItem.href ? "page" : undefined}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}

