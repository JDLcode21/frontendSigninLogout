'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { CreditCard, Calculator, History, Settings, Users, FileText } from 'lucide-react'

const payrollNavItems = [
  {
    title: "Payroll Dashboard",
    href: "/modules/payroll",
    icon: CreditCard,
  },
  {
    title: "Process Payroll",
    href: "/modules/payroll/process",
    icon: Calculator,
    subItems: [
      { title: "New Payroll Run", href: "/modules/payroll/process/new" },
      { title: "Pending Runs", href: "/modules/payroll/process/pending" }
    ]
  },
  {
    title: "Salary Components",
    href: "/modules/payroll/components",
    icon: FileText,
    subItems: [
      { title: "Earnings", href: "/modules/payroll/components/earnings" },
      { title: "Deductions", href: "/modules/payroll/components/deductions" }
    ]
  },
  {
    title: "Employee Payroll",
    href: "/modules/payroll/employees",
    icon: Users,
    subItems: [
      { title: "Salary Structure", href: "/modules/payroll/employees/structure" },
      { title: "Pay Groups", href: "/modules/payroll/employees/groups" }
    ]
  },
  {
    title: "History",
    href: "/modules/payroll/history",
    icon: History,
  },
  {
    title: "Settings",
    href: "/modules/payroll/settings",
    icon: Settings,
  }
]

export function PayrollNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col space-y-2" role="navigation" aria-label="Payroll navigation">
      {payrollNavItems.map((item) => (
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
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
          </Link>
          
          {item.subItems?.map((subItem) => (
            <Link
              key={subItem.href}
              href={subItem.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                pathname === subItem.href
                  ? "bg-muted hover:bg-muted"
                  : "hover:bg-transparent hover:underline",
                "justify-start w-full ml-6"
              )}
              aria-current={pathname === subItem.href ? "page" : undefined}
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  )
}

