'use client'

import { createContext, useContext, useState } from 'react'

const RecruitmentContext = createContext()

// Define the sequence steps as a simple object
const STEPS = {
  JOB_POSTING: 'job-posting',
  CANDIDATE_PROFILE: 'candidate-profile',
  OFFER_MANAGEMENT: 'offer-management'
}

const INITIAL_STATE = {
  jobPosting: {
    required: {
      title: '',
      department: '',
      positionType: '',
      salaryRange: ''
    },
    optional: {
      perks: '',
      flexibleHours: false
    }
  },
  candidateProfile: {
    required: {
      name: '',
      email: '',
      phone: '',
      resume: null
    },
    optional: {
      coverLetter: null,
      linkedinUrl: '',
      portfolioUrl: ''
    }
  },
  offerManagement: {
    required: {
      position: '',
      offerTemplate: '',
      startDate: ''
    },
    optional: {
      bonus: '',
      stockOptions: ''
    }
  },
  currentStep: STEPS.JOB_POSTING,
  completedSteps: [],
  notifications: []
}

export function RecruitmentProvider({ children }) {
  const [recruitmentData, setRecruitmentData] = useState(INITIAL_STATE)

  const updateRecruitmentData = (section, data) => {
    setRecruitmentData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...data
      }
    }))
  }

  const completeStep = (step) => {
    setRecruitmentData(prev => ({
      ...prev,
      completedSteps: [...prev.completedSteps, step],
      currentStep: getNextStep(step)
    }))
  }

  const getNextStep = (currentStep) => {
    const stepSequence = [
      STEPS.JOB_POSTING,
      STEPS.CANDIDATE_PROFILE,
      STEPS.OFFER_MANAGEMENT
    ]
    const currentIndex = stepSequence.indexOf(currentStep)
    return stepSequence[currentIndex + 1] || currentStep
  }

  const addNotification = (message, type = 'info') => {
    const notification = {
      id: Date.now(),
      message,
      type,
      timestamp: new Date()
    }
    
    setRecruitmentData(prev => ({
      ...prev,
      notifications: [notification, ...prev.notifications]
    }))
  }

  return (
    <RecruitmentContext.Provider value={{
      recruitmentData,
      updateRecruitmentData,
      completeStep,
      addNotification,
      STEPS
    }}>
      {children}
    </RecruitmentContext.Provider>
  )
}

export function useRecruitment() {
  const context = useContext(RecruitmentContext)
  if (!context) {
    throw new Error('useRecruitment must be used within a RecruitmentProvider')
  }
  return context
}

