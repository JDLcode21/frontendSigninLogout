import { NextResponse } from 'next/server'

let essSettings = {
  ess: {
    enabled: true,
    features: {
      leaveManagement: true,
      timeTracking: true,
      expenseClaims: true,
      documentsAccess: true,
      profileUpdate: true,
    },
    accessControl: {
      mobileAccess: true,
      ipRestriction: false,
      allowedIPs: "",
    },
  },
  mss: {
    enabled: true,
    features: {
      teamManagement: true,
      leaveApproval: true,
      performanceReview: true,
      timeApproval: true,
      expenseApproval: true,
    },
    approvalLevels: 2,
  },
}

export async function GET() {
  return NextResponse.json(essSettings)
}

export async function PATCH(req) {
  const updates = await req.json()
  essSettings = { ...essSettings, ...updates }
  return NextResponse.json(essSettings)
}

