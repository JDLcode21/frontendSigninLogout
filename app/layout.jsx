import "./globals.css"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { RoleProvider } from "@/components/role-provider"
import { SkipLink } from "@/components/skip-link"
import AuthWrapper from "@/components/AuthWrapper"
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>

        <AuthWrapper>
          <RoleProvider>
            <div className="min-h-screen flex flex-col">
              <SkipLink />
              <header className="border-b" role="banner">
                <div className="flex h-16 items-center px-4">
                  <MainNav className="mx-6" />
                  <div className="ml-auto flex items-center space-x-4">
                    <UserNav />
                  </div>
                </div>
              </header>
              <main id="main-content" className="flex-1" role="main" tabIndex="-1">
                {children}
              </main>
              <footer className="border-t py-4 text-center text-sm text-muted-foreground" role="contentinfo">
                <p>&copy; {new Date().getFullYear()} HR System. All rights reserved.</p>
              </footer>
            </div>
          </RoleProvider>
        </AuthWrapper>
        
      </body>
    </html>
  )
}

export const metadata = {
  generator: 'v0.dev'
}