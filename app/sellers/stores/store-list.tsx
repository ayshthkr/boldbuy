'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Store, MapPin, LayoutGrid, List } from 'lucide-react'
import Link from "next/link"
import { stores } from "../stores-data"
import { cn } from "@/lib/utils"

type ViewMode = 'grid' | 'list'

export function StoreList() {
  const [viewMode, setViewMode] = useState<ViewMode>('list')

  return (
    <div>
      <div className="flex justify-end gap-2 mb-4">
        <Button
          variant={viewMode === 'list' ? "secondary" : "outline"}
          size="icon"
          onClick={() => setViewMode('list')}
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant={viewMode === 'grid' ? "secondary" : "outline"}
          size="icon"
          onClick={() => setViewMode('grid')}
        >
          <LayoutGrid className="h-4 w-4" />
        </Button>
      </div>

      <div className={`grid gap-10 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
        {stores.map((store: any) => (
          <Link href={`/sellers/stores/${store.id}`} key={store.id}>
            <Card className={`shadow-md hover:shadow-xl transition-shadow duration-75 ${viewMode === 'list' ? 'flex items-center min-h-[100px]' : ''}`}>
              <div className={`flex ${viewMode === 'list' ? 'flex-1' : 'flex-col'}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Store className="h-5 w-5 text-purple-600" />
                    {store.store_name}
                  </CardTitle>
                </CardHeader>
                <CardContent className={cn("flex items-center", viewMode === 'list' ? "py-0" : "")}>
                  <p className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    {store.location}
                  </p>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

