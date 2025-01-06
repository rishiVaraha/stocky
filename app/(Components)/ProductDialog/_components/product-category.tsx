"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Product } from "@/app/(Components)/ProductTable/columns";

export function ProductCategory({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<Product["category"]>>;
}) {
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

  useEffect(() => {
    setIsClient(true);
    setSelectedCategory("Electronics");
  }, []);

  if (!isClient) return null;

  return (
    <div className="flex flex-col gap-2 mb-2 ">
      <Label className="text-slate-600">Product&apos;s Category</Label>

      <Select
        value={selectedCategory}
        onValueChange={(value: string) =>
          setSelectedCategory(value as Product["category"])
        }
      >
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
