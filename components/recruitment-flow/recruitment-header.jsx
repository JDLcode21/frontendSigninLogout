'use client'

import { useRecruitment } from "./recruitment-context"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from 'lucide-react'
import { Progress } from "@/components/ui/progress"

export function RecruitmentHeader() {
  const { recruitmentData } = useRecruitment()
  
  const modules = [
    { 
      id: 'e-recruitment', 
      name: 'E-Recruitment', 
      color: 'bg-blue-500',
      steps: ['job-posting', 'application-review', 'offer-management']
    },
    { 
      id: 'hr-admin', 
      name: 'HR Admin', 
      color: 'bg-purple-500',
      steps: ['hire-conversion']
    },
    { 
      id: 'om-pa', 
      name: 'Organization Management', 
      color: 'bg-green-500',
      steps: ['position-assignment']
    }
  ]

  const currentModule = modules.find(m => m.id === recruitmentData.currentModule)
  const progress = currentModule ? 
    ((recruitmentData.completedSteps?.length || 0) / currentModule.steps.length) * 100 : 0

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        {modules.map((module, index) => (
          <div key={module.id} className="flex items-center">
            <Card className={`p-4 ${recruitmentData.currentModule === module.id ? 'border-primary' : ''}`}>
              <Badge className={module.color}>{module.name}</Badge>
              {currentModule?.id === module.id && (
                <div className="mt-2">
                  <Progress value={progress} className="h-1" />
                </div>
              )}
            </Card>
            {index < modules.length - 1 && (
              <ArrowRight className="mx-4 h-4 w-4 text-muted-foreground" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

