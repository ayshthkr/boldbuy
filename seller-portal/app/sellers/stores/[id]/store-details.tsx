import { Store } from "../../stores-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StoreIcon, MapPin } from 'lucide-react'

interface StoreDetailsProps {
  store: Store
}

export function StoreDetails({ store }: StoreDetailsProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <StoreIcon className="h-6 w-6 text-purple-600" />
          {store.store_name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="flex items-center gap-2 text-gray-600">
          <MapPin className="h-5 w-5" />
          {store.location}
        </p>
      </CardContent>
    </Card>
  )
}

