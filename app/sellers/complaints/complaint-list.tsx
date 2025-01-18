'use client'

import { useState, useMemo } from 'react'
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { getAllComplaints, stores, Complaint } from '../stores-data'
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react'

const ITEMS_PER_PAGE = 10

export function ComplaintList() {
  const [complaints, setComplaints] = useState(getAllComplaints())
  const [filters, setFilters] = useState({
    storeId: 'all',
    startDate: '',
    endDate: '',
    status: 'all'
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [sortConfig, setSortConfig] = useState<{ key: keyof Complaint, direction: 'asc' | 'desc' } | null>(null)
  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null)
  const [resolution, setResolution] = useState('')

  const filteredComplaints = useMemo(() => {
    return complaints.filter(complaint => {
      if (filters.storeId !== 'all' && complaint.store_id.toString() !== filters.storeId) return false
      if (filters.startDate && new Date(complaint.date_filed) < new Date(filters.startDate)) return false
      if (filters.endDate && new Date(complaint.date_filed) > new Date(filters.endDate)) return false
      if (filters.status !== 'all' && complaint.status !== filters.status) return false
      return true
    })
  }, [complaints, filters])

  const sortedComplaints = useMemo(() => {
    if (!sortConfig) return filteredComplaints
    return [...filteredComplaints].sort((a, b) => {
    //   if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1
    //   if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1
    //   return 0
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    
    // Handle potential undefined values
    if (aValue === undefined && bValue === undefined) return 0;
    if (aValue === undefined) return sortConfig.direction === 'asc' ? 1 : -1;
    if (bValue === undefined) return sortConfig.direction === 'asc' ? -1 : 1;
    
    // Normal comparison
    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;

    })
  }, [filteredComplaints, sortConfig])

  const paginatedComplaints = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return sortedComplaints.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [sortedComplaints, currentPage])

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }))
    setCurrentPage(1)
  }

  const clearFilters = () => {
    setFilters({
      storeId: 'all',
      startDate: '',
      endDate: '',
      status: 'all'
    })
    setCurrentPage(1)
  }

  const handleSort = (key: keyof Complaint) => {
    setSortConfig(current => {
      if (current?.key === key) {
        return { key, direction: current.direction === 'asc' ? 'desc' : 'asc' }
      }
      return { key, direction: 'asc' }
    })
  }

  const renderSortIcon = (key: keyof Complaint) => {
    if (sortConfig?.key !== key) return <ChevronsUpDown className="h-4 w-4" />
    return sortConfig.direction === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
  }

  const handleStatusChange = (complaintId: number, newStatus: Complaint['status']) => {
    setComplaints(prevComplaints => 
      prevComplaints.map(complaint => 
        complaint.id === complaintId ? { ...complaint, status: newStatus } : complaint
      )
    )
  }

  const handleResolution = () => {
    if (selectedComplaint) {
      setComplaints(prevComplaints => 
        prevComplaints.map(complaint => 
          complaint.id === selectedComplaint.id 
            ? { ...complaint, status: 'addressed', resolution } 
            : complaint
        )
      )
      setSelectedComplaint(null)
      setResolution('')
    }
  }

  const getStatusColor = (status: Complaint['status']) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'in progress': return 'bg-yellow-100 text-yellow-800'
      case 'on hold': return 'bg-orange-100 text-orange-800'
      case 'addressed': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Label htmlFor="store-filter">Store</Label>
          <Select onValueChange={(value) => handleFilterChange('storeId', value)} value={filters.storeId}>
            <SelectTrigger id="store-filter">
              <SelectValue placeholder="Select Store" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Stores</SelectItem>
              {stores.map(store => (
                <SelectItem key={store.id} value={store.id.toString()}>{store.store_name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="start-date">Start Date</Label>
          <Input
            id="start-date"
            type="date"
            value={filters.startDate}
            onChange={(e) => handleFilterChange('startDate', e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="end-date">End Date</Label>
          <Input
            id="end-date"
            type="date"
            value={filters.endDate}
            onChange={(e) => handleFilterChange('endDate', e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="status-filter">Status</Label>
          <Select onValueChange={(value) => handleFilterChange('status', value)} value={filters.status}>
            <SelectTrigger id="status-filter">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="in progress">In Progress</SelectItem>
              <SelectItem value="on hold">On Hold</SelectItem>
              <SelectItem value="addressed">Addressed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button onClick={clearFilters} variant="outline" className="mb-4">Clear Filters</Button>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="cursor-pointer py-2" onClick={() => handleSort('id')}>
              <span className='flex items-center gap-2'>Complaint ID {renderSortIcon('id')}</span>
            </TableHead>
            <TableHead className="cursor-pointer py-2" onClick={() => handleSort('store_id')}>
              <span className='flex items-center gap-2'>Store {renderSortIcon('store_id')}</span>
            </TableHead>
            <TableHead className="cursor-pointer py-2" onClick={() => handleSort('order_id')}>
              <span className='flex items-center gap-2'>Order ID {renderSortIcon('order_id')}</span>
            </TableHead>
            <TableHead className="cursor-pointer py-2" onClick={() => handleSort('date_filed')}>
              <span className='flex items-center gap-2'>Date Filed {renderSortIcon('date_filed')}</span>
            </TableHead>
            <TableHead className="cursor-pointer py-2" onClick={() => handleSort('status')}>
              <span className='flex items-center gap-2'>Status {renderSortIcon('status')}</span>
            </TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedComplaints.map((complaint) => (
            <TableRow key={complaint.id}>
              <TableCell>{complaint.id}</TableCell>
              <TableCell>{stores.find(store => store.id === complaint.store_id)?.store_name}</TableCell>
              <TableCell>{complaint.order_id}</TableCell>
              <TableCell>{new Date(complaint.date_filed).toLocaleString('en-IN')}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(complaint.status)}`}>
                  {complaint.status}
                </span>
              </TableCell>
              <TableCell>{complaint.description}</TableCell>
              <TableCell>
                {complaint.status !== 'addressed' && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" onClick={() => setSelectedComplaint(complaint)}>
                        Address
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Address Complaint</DialogTitle>
                        <DialogDescription>
                          Provide a resolution for the complaint. This will mark the complaint as addressed.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="resolution" className="text-right">
                            Resolution
                          </Label>
                          <Textarea
                            id="resolution"
                            className="col-span-3"
                            value={resolution}
                            onChange={(e) => setResolution(e.target.value)}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit" onClick={handleResolution}>Submit Resolution</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                )}
                {complaint.status !== 'addressed' && (
                  <Select 
                    onValueChange={(value) => handleStatusChange(complaint.id, value as Complaint['status'])} 
                    value={complaint.status}
                  >
                    <SelectTrigger className="w-[130px] mt-2">
                      <SelectValue placeholder="Change Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="in progress">In Progress</SelectItem>
                      <SelectItem value="on hold">On Hold</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 flex justify-between items-center">
        <div>
          Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1} to {Math.min(currentPage * ITEMS_PER_PAGE, sortedComplaints.length)} of {sortedComplaints.length} complaints
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(sortedComplaints.length / ITEMS_PER_PAGE)))}
            disabled={currentPage === Math.ceil(sortedComplaints.length / ITEMS_PER_PAGE)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

