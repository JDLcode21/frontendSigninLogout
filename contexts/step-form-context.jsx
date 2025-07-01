'use client'

import { createContext, useContext, useState, useCallback } from 'react'

const StepFormContext = createContext(undefined)

export function StepFormProvider({ children, totalSteps = 3 }) {
  const [state, setState] = useState({
    currentStep: 0,
    formData: {},
    completedSteps: [],
    isValid: false,
  })

  const nextStep = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentStep: Math.min(prev.currentStep + 1, totalSteps - 1),
    }))
  }, [totalSteps])

  const previousStep = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentStep: Math.max(prev.currentStep - 1, 0),
    }))
  }, [])

  const saveFormData = useCallback((step, data) => {
    setState(prev => ({
      ...prev,
      formData: { ...prev.formData, [step]: data },
      completedSteps: [...new Set([...prev.completedSteps, step])],
      isValid: true,
    }))
  }, [])

  const isStepComplete = useCallback((step) => {
    return state.completedSteps.includes(step)
  }, [state.completedSteps])

  const resetForm = useCallback(() => {
    setState({
      currentStep: 0,
      formData: {},
      completedSteps: [],
      isValid: false,
    })
  }, [])

  return (
    <StepFormContext.Provider
      value={{
        ...state,
        nextStep,
        previousStep,
        saveFormData,
        isStepComplete,
        resetForm,
      }}
    >
      {children}
    </StepFormContext.Provider>
  )
}

export function useStepForm() {
  const context = useContext(StepFormContext)
  if (context === undefined) {
    throw new Error('useStepForm must be used within a StepFormProvider')
  }
  return context
}

