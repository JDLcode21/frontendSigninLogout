'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronRight, Users, UserPlus, Settings, MoreHorizontal } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DepartmentNode {
  id: string
  name: string
  head: string
  headTitle: string
  totalEmployees: number
  vacancies: number
  children?: DepartmentNode[]
  level: number
}

// Example data structure
const initialOrgData: DepartmentNode = {
  id: "exec",
  name: "Executive Management",
  head: "John Smith",
  headTitle: "CEO",
  totalEmployees: 5,
  vacancies: 0,
  level: 0,
  children: [
    {
      id: "eng",
      name: "Engineering",
      head: "Sarah Johnson",
      headTitle: "CTO",
      totalEmployees: 45,
      vacancies: 3,
      level: 1,
      children: [
        {
          id: "frontend",
          name: "Frontend Development",
          head: "Mike Wilson",
          headTitle: "Lead Engineer",
          totalEmployees: 15,
          vacancies: 1,
          level: 2,
        },
        {
          id: "backend",
          name: "Backend Development",
          head: "Lisa Chen",
          headTitle: "Lead Engineer",
          totalEmployees: 20,
          vacancies: 2,
          level: 2,
        },
      ],
    },
    {
      id: "hr",
      name: "Human Resources",
      head: "David Brown",
      headTitle: "HR Director",
      totalEmployees: 12,
      vacancies: 0,
      level: 1,
      children: [
        {
          id: "recruitment",
          name: "Recruitment",
          head: "Emma Davis",
          headTitle: "Recruitment Manager",
          totalEmployees: 5,
          vacancies: 0,
          level: 2,
        },
        {
          id: "training",
          name: "Training & Development",
          head: "James Wilson",
          headTitle: "Training Manager",
          totalEmployees: 4,
          vacancies: 0,
          level: 2,
        },
      ],
    },
  ],
}

export function OrgChartVisualization() {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(["exec"]))

  const toggleNode = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes)
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId)
    } else {
      newExpanded.add(nodeId)
    }
    setExpandedNodes(newExpanded)
  }

  const renderDepartmentNode = (node: DepartmentNode) => {
    const isExpanded = expandedNodes.has(node.id)
    const hasChildren = node.children && node.children.length > 0

    return (
      <div key={node.id} className="relative">
        <Card className="mb-2">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {hasChildren && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-6 w-6"
                    onClick={() => toggleNode(node.id)}
                  >
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                )}
                <div>
                  <h4 className="font-medium">{node.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {node.head} • {node.headTitle}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{node.totalEmployees}</span>
                    {node.vacancies > 0 && (
                      <Badge variant="secondary" className="ml-2">
                        {node.vacancies} open
                      </Badge>
                    )}
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Add Position
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Users className="mr-2 h-4 w-4" />
                      View Members
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Edit Department
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardContent>
        </Card>
        {hasChildren && isExpanded && (
          <div className="ml-8 pl-8 border-l">
            {node.children!.map((child) => renderDepartmentNode(child))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">
          Organization Structure
        </h2>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Department
        </Button>
      </div>

      <div className="bg-muted/50 rounded-lg p-6">
        {renderDepartmentNode(initialOrgData)}
      </div>
    </div>
  )
}

