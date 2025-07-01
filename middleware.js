import { NextResponse } from 'next/server'

// This is a simplified example. In a real application, 
// you would verify the token with your auth provider
const getRole = (token) => {
  if (!token) return null
  // Decode and verify token
  return 'hr-admin' // Example return
}

const moduleAccess = {
  'hr-admin': [
    '/modules/personnel',
    '/modules/time',
    '/modules/payroll',  // Add payroll access for HR admin
    '/modules/organization'
  ],
  'manager': [
    '/modules/team',
    '/modules/time'
  ],
  'employee': [
    '/modules/profile',
    '/modules/time'
  ],
  'payroll-admin': [     // Add specific payroll admin role
    '/modules/payroll'
  ]
}

export function middleware(request) {
  // Get token from cookie or header
  const token = request.cookies.get('token')?.value
  const role = getRole(token)

  if (!role) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  const path = request.nextUrl.pathname
  const allowedPaths = moduleAccess[role] || []

  // Check if the user has access to the requested module
  if (!allowedPaths.some(allowedPath => path.startsWith(allowedPath))) {
    return NextResponse.redirect(new URL('/unauthorized', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/modules/:path*'
}

