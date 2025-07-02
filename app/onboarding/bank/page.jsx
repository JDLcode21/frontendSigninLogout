"use client";
import { BankInformationForm } from "@/components/onboarding/forms/bank-information-form"

export default function BankInformationPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <h1 className="text-2xl font-bold tracking-tight">Bank Information</h1>
      <BankInformationForm onComplete={(data) => console.log(data)} />
    </div>
  )
}

