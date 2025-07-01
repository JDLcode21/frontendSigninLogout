'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Briefcase, Users, FileText, UserPlus, Building2, CircleDot } from 'lucide-react'

const recruitmentNavItems = [
  {
    title: "Active Process",
    href: "/recruitment/flow",
    icon: CircleDot,
  },
  {
    title: "Job Postings",
    href: "/recruitment/jobs",
    icon: Briefcase,
  },
  {
    title: "Candidates",
    href: "/recruitment/candidates",
    icon: Users,
  },
  {
    title: "Applications",
    href: "/recruitment/applications",
    icon: FileText,
  },
  {
    title: "New Hires",
    href: "/recruitment/new-hires",
    icon: UserPlus,
  },
  {
    title: "Departments",
    href: "/recruitment/departments",
    icon: Building2,
  },
]

export function RecruitmentNav() {
  const pathname = usePathname()

  return (
    <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
      {recruitmentNavItems.map((item) => (
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
        >
          <item.icon className="mr-2 h-4 w-4" />
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

