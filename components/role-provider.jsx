'use client'

import { createContext, useContext, useMemo } from 'react'
import { useAuth } from 'react-oidc-context'

const RoleContext = createContext()

export function RoleProvider({ children }) {
  const auth = useAuth()
  const userProfile = auth.user?.profile || {}

  // Fix: extract from actual Cognito claim (custom:role or cognito:groups)
  const role = userProfile["custom:role"] || "guest"

  const value = useMemo(() => ({
    role,
    isRecruiter: role === 'recruiter',
    isCandidate: role === 'candidate',
    isEmployee: role === 'employee',
    isManager: role === 'manager',
    isHRAdmin: role === 'hr-admin',
  }), [role])

  return (
    <RoleContext.Provider value={value}>
      {children}
    </RoleContext.Provider>
  )
}

export function useRole() {
  const context = useContext(RoleContext)
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider')
  }
  return context
}