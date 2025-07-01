import { NextResponse } from 'next/server'

let systemParameters = {
  notifications: {
    channels: ['email', 'push'],
    templates: []
  },
  audit: {
    enabled: true,
    retentionPeriod: 90,
    encryptionEnabled: true
  },
  integration: {
    apiKeys: [],
    webhooks: [],
    thirdPartyServices: []
  }
}

export async function GET() {
  return NextResponse.json(systemParameters)
}

export async function PATCH(req) {
  const updates = await req.json()
  systemParameters = { ...systemParameters, ...updates }
  return NextResponse.json(systemParameters)
}

