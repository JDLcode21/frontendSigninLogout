import { NextResponse } from 'next/server'

// This would typically come from your database
let globalSettings = {
  timeZone: {
    defaultTimeZone: 'UTC',
    supportedTimeZones: ['UTC', 'America/New_York', 'Europe/London']
  },
  language: {
    defaultLanguage: 'en',
    supportedLanguages: ['en', 'es', 'fr']
  },
  currency: {
    defaultCurrency: 'USD',
    supportedCurrencies: ['USD', 'EUR', 'GBP']
  },
  regional: {
    dateFormat: 'YYYY-MM-DD',
    timeFormat: 'HH:mm',
    numberFormat: '#,##0.00',
    firstDayOfWeek: 1
  }
}

export async function GET() {
  return NextResponse.json(globalSettings)
}

export async function PATCH(req) {
  const updates = await req.json()
  globalSettings = { ...globalSettings, ...updates }
  return NextResponse.json(globalSettings)
}

