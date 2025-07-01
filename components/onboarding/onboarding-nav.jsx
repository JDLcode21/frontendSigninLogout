'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserCircle, FileText, Building2, CreditCard, Upload, CheckCircle } from 'lucide-react'

const onboardingNavItems = [
  {
    title: "Overview",
    href: "/onboarding",
    icon: UserCircle,
  },
  {
    title: "Personal Information",
    href: "/onboarding/personal",
    icon: UserCircle,
  },
  {
    title: "Contract Details",
    href: "/onboarding/contract",
    icon: FileText,
  },
  {
    title: "Bank Information",
    href: "/onboarding/bank",
    icon: CreditCard,
  },
  {
    title: "Document Requirements",
    href: "/onboarding/documents",
    icon: Upload,
  },
  {
    title: "Review & Submit",
    href: "/onboarding/review",
    icon: CheckCircle,
  },
]

export function OnboardingNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col space-y-2" aria-label="Onboarding Navigation">
      {onboardingNavItems.map((item) => (
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
          <item.icon className="mr-2 h-4 w-4" />
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

