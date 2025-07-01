"use client"

import { useState } from 'react'
import { PayrollFlow } from '@/components/payroll/payroll-flow'

export default function PayrollPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <PayrollFlow />
    </div>
  )
}

