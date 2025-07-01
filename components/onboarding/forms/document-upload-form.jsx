'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, X } from 'lucide-react'
import { useState } from "react"

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

const documentUploadSchema = z.object({
  identificationDocument: z.any()
    .refine((file) => file?.length === 1, "Identification document is required")
    .refine(
      (file) => file?.[0]?.size <= MAX_FILE_SIZE,
      "File size should be less than 5MB"
    ),
  proofOfAddress: z.any()
    .refine((file) => file?.length === 1, "Proof of address is required")
    .refine(
      (file) => file?.[0]?.size <= MAX_FILE_SIZE,
      "File size should be less than 5MB"
    ),
  qualifications: z.any()
    .refine((file) => file?.length >= 1, "At least one qualification document is required")
    .refine(
      (files) => Array.from(files).every(file => file.size <= MAX_FILE_SIZE),
      "Each file size should be less than 5MB"
    ),
  taxDocument: z.any()
    .refine((file) => file?.length === 1, "Tax document is required")
    .refine(
      (file) => file?.[0]?.size <= MAX_FILE_SIZE,
      "File size should be less than 5MB"
    ),
})

export function DocumentUploadForm({ onComplete }) {
  const [selectedFiles, setSelectedFiles] = useState({})

  const form = useForm({
    resolver: zodResolver(documentUploadSchema),
  })

  function onSubmit(values) {
    // In a real application, you would upload the files to a server here
    console.log('Files to upload:', values)
    onComplete(values)
  }

  const handleFileSelect = (fieldName, files) => {
    setSelectedFiles(prev => ({
      ...prev,
      [fieldName]: Array.from(files).map(file => ({
        name: file.name,
        size: file.size,
        type: file.type
      }))
    }))
  }

  const removeFile = (fieldName, index) => {
    const newFiles = { ...selectedFiles }
    newFiles[fieldName].splice(index, 1)
    setSelectedFiles(newFiles)
    
    // Reset the file input
    const input = document.querySelector(`input[name="${fieldName}"]`)
    if (input) input.value = ''
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="identificationDocument"
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormLabel>Identification Document</FormLabel>
                <FormControl>
                  <div className="space-y-4">
                    <Input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => {
                        onChange(e.target.files)
                        handleFileSelect('identificationDocument', e.target.files)
                      }}
                      {...field}
                    />
                    {selectedFiles.identificationDocument?.map((file, index) => (
                      <Card key={index}>
                        <CardContent className="flex items-center justify-between p-3">
                          <div className="flex items-center space-x-4">
                            <Upload className="h-4 w-4" />
                            <div>
                              <p className="text-sm font-medium">{file.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {(file.size / 1024 / 1024).toFixed(2)}MB
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile('identificationDocument', index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </FormControl>
                <FormDescription>
                  Upload a valid government-issued ID (passport, driver's license, etc.)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="proofOfAddress"
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormLabel>Proof of Address</FormLabel>
                <FormControl>
                  <div className="space-y-4">
                    <Input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => {
                        onChange(e.target.files)
                        handleFileSelect('proofOfAddress', e.target.files)
                      }}
                      {...field}
                    />
                    {selectedFiles.proofOfAddress?.map((file, index) => (
                      <Card key={index}>
                        <CardContent className="flex items-center justify-between p-3">
                          <div className="flex items-center space-x-4">
                            <Upload className="h-4 w-4" />
                            <div>
                              <p className="text-sm font-medium">{file.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {(file.size / 1024 / 1024).toFixed(2)}MB
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile('proofOfAddress', index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </FormControl>
                <FormDescription>
                  Upload a recent utility bill or bank statement (not older than 3 months)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="qualifications"
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormLabel>Qualifications</FormLabel>
                <FormControl>
                  <div className="space-y-4">
                    <Input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      multiple
                      onChange={(e) => {
                        onChange(e.target.files)
                        handleFileSelect('qualifications', e.target.files)
                      }}
                      {...field}
                    />
                    {selectedFiles.qualifications?.map((file, index) => (
                      <Card key={index}>
                        <CardContent className="flex items-center justify-between p-3">
                          <div className="flex items-center space-x-4">
                            <Upload className="h-4 w-4" />
                            <div>
                              <p className="text-sm font-medium">{file.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {(file.size / 1024 / 1024).toFixed(2)}MB
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile('qualifications', index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </FormControl>
                <FormDescription>
                  Upload your degrees, certificates, and other qualifications
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="taxDocument"
            render={({ field: { onChange, ...field } }) => (
              <FormItem>
                <FormLabel>Tax Document</FormLabel>
                <FormControl>
                  <div className="space-y-4">
                    <Input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => {
                        onChange(e.target.files)
                        handleFileSelect('taxDocument', e.target.files)
                      }}
                      {...field}
                    />
                    {selectedFiles.taxDocument?.map((file, index) => (
                      <Card key={index}>
                        <CardContent className="flex items-center justify-between p-3">
                          <div className="flex items-center space-x-4">
                            <Upload className="h-4 w-4" />
                            <div>
                              <p className="text-sm font-medium">{file.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {(file.size / 1024 / 1024).toFixed(2)}MB
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile('taxDocument', index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </FormControl>
                <FormDescription>
                  Upload your tax declaration form
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit">Complete Onboarding</Button>
        </div>
      </form>
    </Form>
  )
}

