'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Plus, X } from 'lucide-react'

interface ImageCarouselProps {
  images: string[]
  onImagesChange: (images: string[]) => void
}

export function ImageCarousel({ images, onImagesChange }: ImageCarouselProps) {
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({})

  const simulateUpload = async (file: File): Promise<string> => {
    const fileId = Math.random().toString(36).substring(7)
    
    // Simulate upload progress
    for (let progress = 0; progress <= 100; progress += 10) {
      setUploadProgress(prev => ({ ...prev, [fileId]: progress }))
      await new Promise(resolve => setTimeout(resolve, 200))
    }

    // Create object URL for preview
    const imageUrl = URL.createObjectURL(file)
    setUploadProgress(prev => {
      const newProgress = { ...prev }
      delete newProgress[fileId]
      return newProgress
    })
    
    return imageUrl
  }

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return

    const newImages: string[] = []
    
    for (let i = 0; i < files.length; i++) {
      const imageUrl = await simulateUpload(files[i])
      newImages.push(imageUrl)
    }

    onImagesChange([...images, ...newImages])
  }

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index)
    onImagesChange(newImages)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square">
            <Image
              src={image || "/placeholder.svg"}
              alt={`Product image ${index + 1}`}
              fill
              className="object-cover rounded-lg"
            />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 h-6 w-6"
              onClick={() => removeImage(index)}
              type='button'
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <label className="relative aspect-square cursor-pointer">
          <div className="h-full w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            <Plus className="h-8 w-8 text-gray-400" />
          </div>
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
      {Object.entries(uploadProgress).map(([id, progress]) => (
        <div key={id} className="space-y-2">
          <div className="text-sm text-gray-500">Uploading image...</div>
          <Progress value={progress} />
        </div>
      ))}
    </div>
  )
}

