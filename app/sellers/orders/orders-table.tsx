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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Label } from "@/components/ui/label"
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react'
import { getAllOrders, stores } from '../stores-data'
import { Order } from '../stores-data'

const ITEMS_PER_PAGE = 10

export function OrdersTable() {
  const allOrders = getAllOrders()
  const [filters, setFilters] = useState({
    storeId: 'all',
    startDate: '',
    endDate: '',
    minAmount: '',
    maxAmount: '',
    status: 'all'
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [sortConfig, setSortConfig] = useState<{ key: keyof Order | 'store_name', direction: 'asc' | 'desc' } | null>(null)

  const filteredOrders = useMemo(() => {
    return allOrders.filter(order => {
      if (filters.storeId !== 'all' && order.store_id.toString() !== filters.storeId) return false
      if (filters.startDate && new Date(order.order_date) < new Date(filters.startDate)) return false
      if (filters.endDate && new Date(order.order_date) > new Date(filters.endDate)) return false
      if (filters.minAmount && order.total_amount < parseFloat(filters.minAmount)) return false
      if (filters.maxAmount && order.total_amount > parseFloat(filters.maxAmount)) return false
      if (filters.status !== 'all' && order.status !== filters.status) return false
      return true
    })
  }, [allOrders, filters])

  const sortedOrders = useMemo(() => {
    if (!sortConfig) return filteredOrders
    return [...filteredOrders].sort((a, b) => {
      if (sortConfig.key === 'store_name') {
        const aStoreName = stores.find(store => store.id === a.store_id)?.store_name || ''
        const bStoreName = stores.find(store => store.id === b.store_id)?.store_name || ''
        return sortConfig.direction === 'asc' ? aStoreName.localeCompare(bStoreName) : bStoreName.localeCompare(aStoreName)
      }
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1
      return 0
    })
  }, [filteredOrders, sortConfig])

  const paginatedOrders = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return sortedOrders.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [sortedOrders, currentPage])

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }))
    setCurrentPage(1)
  }

  const clearFilters = () => {
    setFilters({
      storeId: 'all',
      startDate: '',
      endDate: '',
      minAmount: '',
      maxAmount: '',
      status: 'all'
    })
    setCurrentPage(1)
  }

  const handleSort = (key: keyof Order | 'store_name') => {
    setSortConfig(current => {
      if (current?.key === key) {
        return { key, direction: current.direction === 'asc' ? 'desc' : 'asc' }
      }
      return { key, direction: 'asc' }
    })
  }

  const renderSortIcon = (key: keyof Order | 'store_name') => {
    if (sortConfig?.key !== key) return <ChevronsUpDown className="h-4 w-4" />
    return sortConfig.direction === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
  }

  return (
    <div>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
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
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Input
                  id="start-date"
                  type="date"
                  value={filters.startDate}
                  onChange={(e) => handleFilterChange('startDate', e.target.value)}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Filter orders from this date</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div>
          <Label htmlFor="end-date">End Date</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Input
                  id="end-date"
                  type="date"
                  value={filters.endDate}
                  onChange={(e) => handleFilterChange('endDate', e.target.value)}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Filter orders up to this date</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div>
          <Label htmlFor="min-amount">Min Amount</Label>
          <Input
            id="min-amount"
            type="number"
            placeholder="Min Amount"
            value={filters.minAmount}
            onChange={(e) => handleFilterChange('minAmount', e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="max-amount">Max Amount</Label>
          <Input
            id="max-amount"
            type="number"
            placeholder="Max Amount"
            value={filters.maxAmount}
            onChange={(e) => handleFilterChange('maxAmount', e.target.value)}
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
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button onClick={clearFilters} variant="outline" className="mb-4">Clear Filters</Button>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="cursor-pointer py-2 hover:bg-gray-200" onClick={() => handleSort('id')}>
              <span className='flex items-center gap-1'>Order ID {renderSortIcon('id')}</span>
            </TableHead>
            <TableHead className="cursor-pointer py-2 hover:bg-gray-200" onClick={() => handleSort('store_name')}>
              <span className='flex items-center gap-1'>Store {renderSortIcon('store_name')}</span>
            </TableHead>
            <TableHead>Customer ID <></></TableHead>
            <TableHead className="cursor-pointer py-2 hover:bg-gray-200" onClick={() => handleSort('order_date')}>
              <span className='flex items-center gap-1'>Order Date {renderSortIcon('order_date')}</span>
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="cursor-pointer py-2 hover:bg-gray-200" onClick={() => handleSort('total_amount')}>
              <span className='flex items-center gap-1'>Total Amount {renderSortIcon('total_amount')}</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{stores.find(store => store.id === order.store_id)?.store_name}</TableCell>
              <TableCell>{order.customer_id}</TableCell>
              <TableCell>{new Date(order.order_date).toLocaleDateString("en-IN")}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>${order.total_amount.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 flex justify-between items-center">
        <div>
          Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1} to {Math.min(currentPage * ITEMS_PER_PAGE, sortedOrders.length)} of {sortedOrders.length} orders
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(sortedOrders.length / ITEMS_PER_PAGE)))}
            disabled={currentPage === Math.ceil(sortedOrders.length / ITEMS_PER_PAGE)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

