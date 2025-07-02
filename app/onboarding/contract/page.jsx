"use client";
import { ContractDetailsForm } from "@/components/onboarding/forms/contract-details-form"

export default function ContractDetailsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <h1 className="text-2xl font-bold tracking-tight">Contract Details</h1>
      <ContractDetailsForm onComplete={(data) => console.log(data)} />
    </div>
  )
}

