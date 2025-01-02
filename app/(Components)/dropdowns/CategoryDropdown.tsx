"use client";

import * as React from "react";
import { Check, LucideGitPullRequest } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";

type Category = {
  value: string;
  label: string;
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

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

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
                  <Checkbox className="size-4 rounded-sm" />
                  <div className="flex items-center gap-1 p-1 rounded-lg px-3 text-sm">
                    {category.label}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
