'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { CreditCard, Calculator, History, Settings, Users, FileText, DollarSign, Percent, Building2 } from 'lucide-react'

const payrollNavItems = [
  {
    title: "Overview",
    href: "/payroll",
    icon: CreditCard,
  },
  {
    title: "Payroll Processing",
    href: "/payroll/processing",
    icon: Calculator,
    subItems: [
      { title: "New Run", href: "/payroll/processing/new" },
      { title: "Pending Runs", href: "/payroll/processing/pending" },
      { title: "Approvals", href: "/payroll/processing/approvals" }
    ]
  },
  {
    title: "Salary Structure",
    href: "/payroll/salary",
    icon: DollarSign,
    subItems: [
      { title: "Components", href: "/payroll/salary/components" },
      { title: "Grade Setup", href: "/payroll/salary/grades" },
      { title: "Pay Scales", href: "/payroll/salary/scales" }
    ]
  },
  {
    title: "Deductions",
    href: "/payroll/deductions",
    icon: Percent,
    subItems: [
      { title: "Tax Setup", href: "/payroll/deductions/tax" },
      { title: "Benefits", href: "/payroll/deductions/benefits" },
      { title: "Other Deductions", href: "/payroll/deductions/other" }
    ]
  },
  {
    title: "Cost Centers",
    href: "/payroll/cost-centers",
    icon: Building2,
    subItems: [
      { title: "Center Setup", href: "/payroll/cost-centers/setup" },
      { title: "Allocations", href: "/payroll/cost-centers/allocations" }
    ]
  },
  {
    title: "Employee Payroll",
    href: "/payroll/employees",
    icon: Users,
    subItems: [
      { title: "Salary Details", href: "/payroll/employees/salary" },
      { title: "Pay Groups", href: "/payroll/employees/groups" },
      { title: "Bank Details", href: "/payroll/employees/bank" }
    ]
  },
  {
    title: "Reports",
    href: "/payroll/reports",
    icon: FileText,
    subItems: [
      { title: "Payroll Summary", href: "/payroll/reports/summary" },
      { title: "Tax Reports", href: "/payroll/reports/tax" },
      { title: "Custom Reports", href: "/payroll/reports/custom" }
    ]
  },
  {
    title: "History",
    href: "/payroll/history",
    icon: History,
  },
  {
    title: "Settings",
    href: "/payroll/settings",
    icon: Settings,
    subItems: [
      { title: "General", href: "/payroll/settings/general" },
      { title: "Calculations", href: "/payroll/settings/calculations" },
      { title: "Approvals", href: "/payroll/settings/approvals" }
    ]
  }
]

export function PayrollNav() {
  const pathname = usePathname()

  return (
    <nav 
      className="flex flex-col space-y-2" 
      role="navigation" 
      aria-label="Payroll navigation"
    >
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

