"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react";
import { stores } from "../stores-data";
import { InventoryFilters, FilterOptions } from "./inventory-filters";

type SortConfig = {
  key: string;
  direction: "asc" | "desc";
};

const ITEMS_PER_PAGE = 10;

export default function InventoryTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "",
    direction: "asc",
  });
  const [filters, setFilters] = useState<FilterOptions>({
    store: "all",
    minQuantity: "",
    maxQuantity: "",
    minPrice: "",
    maxPrice: "",
  });

  const allInventory = useMemo(
    () =>
      stores.flatMap((store) =>
        store.inventory.map((item) => ({
          ...item,
          store_name: store.store_name,
          location: store.location,
          store_id: store.id,
        }))
      ),
    []
  );

  const filteredInventory = useMemo(() => {
    return allInventory.filter((item) => {
      const matchesSearch =
        item.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.store_name.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStore =
        !filters.store ||
        filters.store === "all" ||
        item.store_id.toString() === filters.store;
      const matchesMinQuantity =
        !filters.minQuantity || item.quantity >= parseInt(filters.minQuantity);
      const matchesMaxQuantity =
        !filters.maxQuantity || item.quantity <= parseInt(filters.maxQuantity);
      const matchesMinPrice =
        !filters.minPrice || item.price >= parseFloat(filters.minPrice);
      const matchesMaxPrice =
        !filters.maxPrice || item.price <= parseFloat(filters.maxPrice);

      return (
        matchesSearch &&
        matchesStore &&
        matchesMinQuantity &&
        matchesMaxQuantity &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });
  }, [allInventory, searchTerm, filters]);

  const sortedInventory = useMemo(() => {
    const sortableItems = [...filteredInventory];
    if (sortConfig.key) {
      sortableItems.sort((a: any, b: any) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [filteredInventory, sortConfig]);

  const paginatedInventory = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedInventory.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [sortedInventory, currentPage]);

  const totalPages = Math.ceil(sortedInventory.length / ITEMS_PER_PAGE);

  const handleSort = (key: string) => {
    setSortConfig((prevConfig) => ({
      key,
      direction:
        prevConfig.key === key && prevConfig.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const renderSortIcon = (key: string) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? (
        <ChevronUp className="w-4 h-4" />
      ) : (
        <ChevronDown className="w-4 h-4" />
      );
    }
    return <ChevronsUpDown className="w-4 h-4" />;
  };

  const clearFilters = () => {
    setFilters({
      store: "all",
      minQuantity: "",
      maxQuantity: "",
      minPrice: "",
      maxPrice: "",
    });
    setSearchTerm("");
    setCurrentPage(1);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Input
          placeholder="Search products or stores..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="max-w-sm"
        />
        <Button onClick={clearFilters}>Clear All Filters</Button>
      </div>

      <InventoryFilters
        onFilterChange={setFilters}
      />

      <div className="rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                className="cursor-pointer py-2 hover:bg-gray-100"
                onClick={() => handleSort("product_name")}
              >
                <span className="flex items-center gap-2">
                  Product Name {renderSortIcon("product_name")}
                </span>
              </TableHead>
              <TableHead
                className="cursor-pointer py-2 hover:bg-gray-100"
                onClick={() => handleSort("store_name")}
              >
                <span className="flex items-center gap-2">
                  Store {renderSortIcon("store_name")}
                </span>
              </TableHead>
              <TableHead>Location</TableHead>
              <TableHead
                className="cursor-pointer py-2 hover:bg-gray-100"
                onClick={() => handleSort("quantity")}
              >
                <span className="flex items-center gap-2">
                  Quantity {renderSortIcon("quantity")}
                </span>
              </TableHead>
              <TableHead
                className="cursor-pointer py-2 hover:bg-gray-100"
                onClick={() => handleSort("price")}
              >
                <span className="flex items-center gap-2">
                  Price {renderSortIcon("price")}
                </span>
              </TableHead>
              <TableHead
                className="cursor-pointer py-2 hover:bg-gray-100"
                onClick={() => handleSort("last_updated")}
              >
                <span className="flex items-center gap-2">
                  Last Updated {renderSortIcon("last_updated")}
                </span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedInventory.map((item) => (
              <TableRow key={`${item.id}-${item.store_name}`}>
                <TableCell className="font-medium">
                  {item.product_name}
                </TableCell>
                <TableCell>{item.store_name}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>${item.price.toFixed(2)}</TableCell>
                <TableCell>
                  {new Date(item.last_updated).toLocaleDateString("en-IN")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between items-center">
        <div>
          Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} -{" "}
          {Math.min(currentPage * ITEMS_PER_PAGE, sortedInventory.length)} of{" "}
          {sortedInventory.length} items
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
