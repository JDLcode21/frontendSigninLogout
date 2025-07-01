'use client'

import Link from "next/link"
import { cn } from "@/lib/utils"
import { useRole } from "@/components/role-provider"
import { FileText, Users, Building2, Clock, CreditCard, Settings, UserPlus } from 'lucide-react'
import { usePathname } from "next/navigation"

export function MainNav({ className, ...props }) {
  const { isRecruiter, isHRAdmin, isManager, isEmployee, isCandidate } = useRole()
  const pathname = usePathname()

  const modules = [
    {
      title: "Dashboard",
      href: "/",
      icon: FileText,
      show: true
    },
    {
      title: "Recruitment",
      href: "/recruitment",
      icon: Users,
      show: isRecruiter || isHRAdmin,
      subItems: [
        {
          title: "Process Flow",
          href: "/recruitment/flow"
        },
        {
          title: "Forms & Fields",
          href: "/recruitment/forms"
        }
      ]
    },
    {
      title: "Personnel",
      href: "/personnel",
      icon: Users,
      show: isHRAdmin,
      subItems: [
        {
          title: "Employee Directory",
          href: "/personnel"
        },
        {
          title: "Forms & Fields",
          href: "/personnel/forms"
        }
      ]
    },
    {
      title: "Organization",
      href: "/organization",
      icon: Building2,
      show: isHRAdmin || isManager,
      subItems: [
        {
          title: "Structure",
          href: "/organization"
        },
        {
          title: "Forms & Fields",
          href: "/organization/forms"
        }
      ]
    },
    {
      title: "Time Management",
      href: "/time",
      icon: Clock,
      show: isEmployee || isManager || isHRAdmin,
      subItems: [
        {
          title: "Calendar",
          href: "/time"
        },
        {
          title: "Forms & Fields",
          href: "/time/forms"
        }
      ]
    },
    {
      title: "Payroll",
      href: "/payroll",
      icon: CreditCard,
      show: isHRAdmin,
      subItems: [
        {
          title: "Overview",
          href: "/payroll"
        },
        {
          title: "Forms & Fields",
          href: "/payroll/forms"
        }
      ]
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
      show: isHRAdmin,
      subItems: [
        {
          title: "ESS/MSS",
          href: "/settings/ess-mss"
        }
      ]
    },
    {
      title: "Onboarding",
      href: "/onboarding",
      icon: UserPlus,
      show: isHRAdmin || isEmployee,
      subItems: [
        {
          title: "Process Overview",
          href: "/onboarding"
        },
        {
          title: "Document Requirements",
          href: "/onboarding/documents"
        }
      ]
    }
  ]

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      aria-label="Main navigation"
      {...props}
    >
      {modules
        .filter(module => module.show)
        .map((module) => (
          <div key={module.href} className="relative group">
            <Link 
              href={module.href}
              className="flex items-center text-sm font-medium transition-colors hover:text-primary"
              aria-current={pathname === module.href ? "page" : undefined}
              role="menuitem"
            >
              <module.icon className="mr-2 h-4 w-4" aria-hidden="true" />
              <span>{module.title}</span>
            </Link>
            
            {module.subItems && (
              <div 
                className="absolute left-0 top-full hidden group-hover:block"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby={`${module.title}-menu`}
              >
                <div className="pt-2">
                  <div className="rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="none">
                      {module.subItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                          role="menuitem"
                          aria-current={pathname === item.href ? "page" : undefined}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
    </nav>
  )
}

