'use client'

import { useAuth } from "react-oidc-context"
import { useRole } from "@/components/role-provider"
import { RecruiterDashboard } from "@/components/dashboards/recruiter-dashboard"
import { CandidateDashboard } from "@/components/dashboards/candidate-dashboard"
import { EmployeeDashboard } from "@/components/dashboards/employee-dashboard"
import { ManagerDashboard } from "@/components/dashboards/manager-dashboard"
import { HRAdminDashboard } from "@/components/dashboards/hr-admin-dashboard"

export default function EnhancedDashboard() {
  const { role, isRecruiter, isCandidate, isEmployee, isManager, isHRAdmin } = useRole()
  const auth = useAuth()
  const userProfile = auth?.user?.profile

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      {isRecruiter && <RecruiterDashboard />}
      {isCandidate && <CandidateDashboard />}
      {isEmployee && <EmployeeDashboard />}
      {isManager && <ManagerDashboard />}
      {isHRAdmin && <HRAdminDashboard />}

      <h1>Welcome, {userProfile?.name || userProfile?.email || "User"}!</h1>
      <p>Your email: {userProfile?.email}</p>
      <p>Phone number: {userProfile?.phone_number || "Not provided"}</p>
      <p>Preferred username: {userProfile?.preferred_username}</p>
      <p>Role: {role}</p>

      {/* You can add more features/components here */}
      <hr />
      <h2>Dashboard Content</h2>
      <p>This is your protected dashboard.</p>
    </div>
  )
}
