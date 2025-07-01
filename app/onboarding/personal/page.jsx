import { PersonalDataForm } from "@/components/onboarding/forms/personal-data-form"

export default function PersonalInformationPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <h1 className="text-2xl font-bold tracking-tight">Personal Information</h1>
      <PersonalDataForm onComplete={(data) => console.log(data)} />
    </div>
  )
}

