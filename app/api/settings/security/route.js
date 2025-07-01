import { NextResponse } from 'next/server'

let securitySettings = {
  authentication: {
    method: 'local',
    mfaEnabled: false,
    mfaMethods: ['authenticator'],
    passwordPolicy: {
      minLength: 8,
      requireSpecialChars: true,
      requireNumbers: true,
      requireUppercase: true,
      expiryDays: 90
    }
  },
  session: {
    timeout: 30,
    maxConcurrentSessions: 1,
    rememberMeDuration: 7
  }
}

export async function GET() {
  return NextResponse.json(securitySettings)
}

export async function PATCH(req) {
  const updates = await req.json()
  securitySettings = { ...securitySettings, ...updates }
  return NextResponse.json(securitySettings)
}

