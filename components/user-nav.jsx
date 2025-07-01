'use client'

import { useRole } from "@/components/role-provider"
import oidcConfigSignOutConfig from "@/src/utils/oidcConfigSignOutConfig"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function UserNav() {
  const { role, setRole } = useRole()

  const roles = [
    { id: 'hr-admin', label: 'HR Admin' },
    { id: 'recruiter', label: 'Recruiter' },
    { id: 'manager', label: 'Manager' },
    { id: 'employee', label: 'Employee' },
    { id: 'candidate', label: 'Candidate' },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="relative h-8 w-8 rounded-full"
          aria-label="Open user menu"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/01.png" alt={`Avatar for ${role}`} />
            <AvatarFallback>{role[0].toUpperCase()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{role}</p>
            <p className="text-xs leading-none text-muted-foreground">
              user@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={() => {}} role="menuitem">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => {}} role="menuitem">
            Settings
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Switch Role</DropdownMenuLabel>
          {roles.map((r) => (
            <DropdownMenuItem 
              key={r.id} 
              onSelect={() => setRole(r.id)}
              role="menuitemradio"
              aria-checked={role === r.id}
            >
              {r.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={oidcConfigSignOutConfig} role="menuitem">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

