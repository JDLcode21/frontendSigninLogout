import { Separator } from "@/components/ui/separator"
import { PayrollNav } from "./payroll-nav"
import { PayrollProvider } from "@/contexts/payroll-context"

export default function PayrollLayout({ children }) {
  return (
    <PayrollProvider>
      <div className="space-y-6 p-10 pb-16">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Payroll Management</h2>
          <p className="text-muted-foreground">
            Process payroll, manage salary components, and handle payroll runs.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="lg:w-1/5">
            <PayrollNav />
          </aside>
          <div className="flex-1">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </PayrollProvider>
  )
}

