"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { complaints, stores } from "../stores-data"

export default function ReportsView() {
  const complaintData = complaints.map(complaint => {
    const store = stores.find(s => s.id === complaint.id)
    return {
      ...complaint,
      store_name: store?.store_name
    }
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-red-500'
      case 'in progress':
        return 'bg-yellow-500'
      case 'on hold':
        return 'bg-blue-500'
      case 'addressed':
        return 'bg-green-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Complaints</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Store</TableHead>
              <TableHead>Date Filed</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Resolution</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {complaintData.map((complaint) => (
              <TableRow key={complaint.id}>
                <TableCell>{complaint.store_name}</TableCell>
                <TableCell>{new Date(complaint.date_filed).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={getStatusColor(complaint.status)}>
                    {complaint.status}
                  </Badge>
                </TableCell>
                <TableCell>{complaint.description}</TableCell>
                <TableCell>{complaint.resolution || 'Pending'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

