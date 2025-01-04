"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

export function ProductCategory() {
  const categories = [
    "Electronics",
    "Furniture",
    "Clothing",
    "Books",
    "Toys",
    "Beauty",
    "Sports",
    "Home Decor",
    "Home Appliances",
    "Others",
  ];

  const [isClient, setIsClient] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setIsClient(true);
    setSelectedCategory(categories[0]);
  }, []);

  if (!isClient) return null;

  return (
    <div className="flex flex-col gap-2 mb-2 ">
      <Label className="text-slate-600">Product&apos;s Category</Label>

      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
        <SelectTrigger className="h-12 shadow-none">
          <SelectValue placeholder="Select a Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
