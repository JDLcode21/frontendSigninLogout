'use client'

import { createContext, useContext, useState } from 'react'

const PayrollContext = createContext(undefined)

export function PayrollProvider({ children }) {
  const [activePayrollRun, setActivePayrollRun] = useState(null)
  const [payrollData, setPayrollData] = useState({})

  const updatePayrollData = (step, data) => {
    setPayrollData(prev => ({
      ...prev,
      [step]: {
        ...prev[step],
        ...data
      }
    }))
  }

  return (
    <PayrollContext.Provider
      value={{
        activePayrollRun,
        setActivePayrollRun,
        payrollData,
        updatePayrollData
      }}
    >
      {children}
    </PayrollContext.Provider>
  )
}

export function usePayroll() {
  const context = useContext(PayrollContext)
  if (context === undefined) {
    throw new Error('usePayroll must be used within a PayrollProvider')
  }
  return context
}

