"use client";
import { LucideGitPullRequest } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

type Category = {
  value: string;
  label: string;
};

type CategoriesDropDownProps = {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

const categories: Category[] = [
  {
    value: "electronics",
    label: "Electronics",
  },
  {
    value: "furniture",
    label: "Furniture",
  },
  {
    value: "clothing",
    label: "Clothing",
  },
  {
    value: "books",
    label: "Books",
  },
  {
    value: "toys",
    label: "Toys",
  },
  {
    value: "beauty",
    label: "Beauty",
  },
  {
    value: "sports",
    label: "Sports",
  },
  {
    value: "home-decor",
    label: "Home Decor",
  },
  {
    value: "home-appliances",
    label: "Home Appliances",
  },
  {
    value: "other",
    label: "Other",
  },
];

export function CategoriesDropDown({
  selectedCategories,
  setSelectedCategories,
}: CategoriesDropDownProps) {
  const [open, setOpen] = useState(false);

  console.log("Selected categories:", selectedCategories);

  function handleCheckboxChange(value: string) {
    console.log("Handling change for category:", value);

    setSelectedCategories((prev) => {
      const updatedCategories = prev.includes(value)
        ? prev.filter((category) => category !== value)
        : [...prev, value];

      console.log("Updated Categories:", updatedCategories);
      return updatedCategories;
    });
  }

  function clearFilters() {
    setSelectedCategories([]);
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="secondary">
          <LucideGitPullRequest />
          Categories
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem key={category.value} value={category.value}>
                  <Checkbox
                    checked={selectedCategories.includes(category.value)}
                    onClick={() => handleCheckboxChange(category.value)}
                    className="size-4 rounded-sm"
                  />
                  <div className="flex items-center gap-1 p-1 rounded-lg px-3 text-sm">
                    {category.label}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <div className="flex flex-col gap-2 text-2xl">
            <Separator />
            <Button
              variant="secondary"
              className="text-xs mb-1"
              onClick={clearFilters}
            >
              Clear Filter
            </Button>
          </div>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
