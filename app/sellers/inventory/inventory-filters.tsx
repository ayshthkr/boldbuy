'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { stores } from "../stores-data";

export type FilterOptions = {
  store: string;
  minQuantity: string;
  maxQuantity: string;
  minPrice: string;
  maxPrice: string;
};

type InventoryFiltersProps = {
  onFilterChange: (filters: FilterOptions) => void;
};

export function InventoryFilters({
  onFilterChange,
}: InventoryFiltersProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    store: "all",
    minQuantity: "",
    maxQuantity: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
      <div>
        <Label htmlFor="store-filter">Store</Label>
        <Select onValueChange={(value) => handleFilterChange("store", value)}>
          <SelectTrigger id="store-filter">
            <SelectValue placeholder="All Stores" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Stores</SelectItem>
            {stores.map((store) => (
              <SelectItem key={store.id} value={store.id.toString()}>
                {store.store_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="min-quantity">Min Quantity</Label>
        <Input
          id="min-quantity"
          type="number"
          placeholder="Min"
          onChange={(e) => handleFilterChange("minQuantity", e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="max-quantity">Max Quantity</Label>
        <Input
          id="max-quantity"
          type="number"
          placeholder="Max"
          onChange={(e) => handleFilterChange("maxQuantity", e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="min-price">Min Price</Label>
        <Input
          id="min-price"
          type="number"
          placeholder="Min"
          onChange={(e) => handleFilterChange("minPrice", e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="max-price">Max Price</Label>
        <Input
          id="max-price"
          type="number"
          placeholder="Max"
          onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
        />
      </div>
    </div>
  );
}
