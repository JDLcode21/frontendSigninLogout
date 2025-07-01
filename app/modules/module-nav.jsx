'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { useRole } from "@/components/role-provider"
import { FileText, Users, Clock, CreditCard, Building2, Settings, UserCircle } from 'lucide-react'

const getModulesByRole = (role) => {
  const modules = {
    'hr-admin': [
      {
        title: "Personnel Administration",
        href: "/modules/personnel",
        icon: Users,
        subItems: [
          { title: "Employee Records", href: "/modules/personnel/records" },
          { title: "Contract Management", href: "/modules/personnel/contracts" }
        ]
      },
      {
        title: "Time Management",
        href: "/modules/time",
        icon: Clock,
        subItems: [
          { title: "Leave Management", href: "/modules/time/leave" },
          { title: "Attendance", href: "/modules/time/attendance" }
        ]
      },
      {
        title: "Payroll",
        href: "/modules/payroll",
        icon: CreditCard,
        subItems: [
          { title: "Payroll Run", href: "/modules/payroll/run" },
          { title: "Payment History", href: "/modules/payroll/history" }
        ]
      },
      {
        title: "Organization",
        href: "/modules/organization",
        icon: Building2,
        subItems: [
          { title: "Structure", href: "/modules/organization/structure" },
          { title: "Positions", href: "/modules/organization/positions" }
        ]
      }
    ],
    'manager': [
      {
        title: "Team Management",
        href: "/modules/team",
        icon: Users,
        subItems: [
          { title: "Team Overview", href: "/modules/team/overview" },
          { title: "Leave Approvals", href: "/modules/team/leave-approvals" }
        ]
      },
      {
        title: "Time Management",
        href: "/modules/time",
        icon: Clock,
        subItems: [
          { title: "Team Calendar", href: "/modules/time/team-calendar" },
          { title: "Attendance Overview", href: "/modules/time/attendance" }
        ]
      }
    ],
    'employee': [
      {
        title: "My Profile",
        href: "/modules/profile",
        icon: UserCircle,
        subItems: [
          { title: "Personal Info", href: "/modules/profile/personal" },
          { title: "Documents", href: "/modules/profile/documents" }
        ]
      },
      {
        title: "Time Management",
        href: "/modules/time",
        icon: Clock,
        subItems: [
          { title: "Leave Request", href: "/modules/time/leave-request" },
          { title: "My Attendance", href: "/modules/time/my-attendance" }
        ]
      }
    ]
  }

  return modules[role] || []
}

export function ModuleNav() {
  const pathname = usePathname()
  const { role } = useRole()
  const modules = getModulesByRole(role)

  return (
    <nav className="flex flex-col space-y-2">
      {modules.map((module) => (
        <div key={module.href} className="space-y-1">
          <Link
            href={module.href}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              pathname === module.href
                ? "bg-muted hover:bg-muted"
                : "hover:bg-transparent hover:underline",
              "justify-start w-full"
            )}
          >
            <module.icon className="mr-2 h-4 w-4" />
            {module.title}
          </Link>
          
          {module.subItems?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                pathname === item.href
                  ? "bg-muted hover:bg-muted"
                  : "hover:bg-transparent hover:underline",
                "justify-start w-full ml-6"
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  )
}

