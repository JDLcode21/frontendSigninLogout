'use client'

import { createContext, useContext, useState } from 'react'

const ModuleContext = createContext(undefined)

export function ModuleProvider({ children }) {
  const [activeModule, setActiveModule] = useState(null)
  const [moduleData, setModuleData] = useState({})

  const updateModuleData = (module, data) => {
    setModuleData(prev => ({
      ...prev,
      [module]: {
        ...prev[module],
        ...data
      }
    }))
  }

  return (
    <ModuleContext.Provider
      value={{
        activeModule,
        setActiveModule,
        moduleData,
        updateModuleData
      }}
    >
      {children}
    </ModuleContext.Provider>
  )
}

export function useModule() {
  const context = useContext(ModuleContext)
  if (context === undefined) {
    throw new Error('useModule must be used within a ModuleProvider')
  }
  return context
}

