'use client'

import { useRecruitment } from "./recruitment-context"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from 'lucide-react'

export function ModuleTransition() {
  const { recruitmentData } = useRecruitment()
  
  const modules = [
    { id: 'e-recruitment', name: 'E-Recruitment Module', color: 'bg-blue-500' },
    { id: 'hr-admin', name: 'HR Admin Lifecycle', color: 'bg-purple-500' },
    { id: 'om-pa', name: 'OM/PA Module', color: 'bg-green-500' }
  ]

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {modules.map((module, index) => (
          <div key={module.id} className="flex items-center">
            <Card className={`p-4 ${recruitmentData.currentModule === module.id ? 'border-primary' : ''}`}>
              <Badge className={module.color}>{module.name}</Badge>
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

