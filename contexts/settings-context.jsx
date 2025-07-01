'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const SettingsContext = createContext(undefined)

export function SettingsProvider({ children }) {
  const [globalSettings, setGlobalSettings] = useState(null)
  const [securitySettings, setSecuritySettings] = useState(null)
  const [systemParameters, setSystemParameters] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadSettings = async () => {
      try {
        // In a real app, these would be API calls
        const [global, security, system] = await Promise.all([
          fetch('/api/settings/global').then(res => res.json()),
          fetch('/api/settings/security').then(res => res.json()),
          fetch('/api/settings/system').then(res => res.json())
        ])

        setGlobalSettings(global)
        setSecuritySettings(security)
        setSystemParameters(system)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load settings'))
      } finally {
        setIsLoading(false)
      }
    }

    loadSettings()
  }, [])

  const updateGlobalSettings = async (settings) => {
    try {
      const updated = await fetch('/api/settings/global', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      }).then(res => res.json())

      setGlobalSettings(updated)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update global settings'))
      throw err
    }
  }

  const updateSecuritySettings = async (settings) => {
    try {
      const updated = await fetch('/api/settings/security', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      }).then(res => res.json())

      setSecuritySettings(updated)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update security settings'))
      throw err
    }
  }

  const updateSystemParameters = async (params) => {
    try {
      const updated = await fetch('/api/settings/system', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      }).then(res => res.json())

      setSystemParameters(updated)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update system parameters'))
      throw err
    }
  }

  return (
    <SettingsContext.Provider
      value={{
        globalSettings,
        securitySettings,
        systemParameters,
        updateGlobalSettings,
        updateSecuritySettings,
        updateSystemParameters,
        isLoading,
        error
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }
  return context
}

