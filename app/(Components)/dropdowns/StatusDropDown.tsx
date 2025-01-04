"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandList,
  CommandItem,
  CommandGroup,
} from "@/components/ui/command";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { PopoverTrigger } from "@radix-ui/react-popover";

import { LucideGitPullRequestDraft } from "lucide-react";
import React, { useState } from "react";
import { FaCheck, FaInbox } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

type Status = {
  value: string;
  lable: string;
  icon: React.ReactNode;
};

const statuses: Status[] = [
  { value: "published", lable: "Published", icon: <FaCheck /> },
  { value: "draft", lable: "Draft", icon: <FaInbox /> },
  { value: "inactive", lable: "Inactive", icon: <IoClose /> },
];

type StatusDropDownProps = {
  selectedStatuses: string[];
  setSelectedStatuses: React.Dispatch<React.SetStateAction<string[]>>;
};

export function StatusDropDown({
  selectedStatuses,
  setSelectedStatuses,
}: StatusDropDownProps) {
  const [open, setOpen] = useState(false);

  function returnColor(status: string) {
    switch (status) {
      case "published":
        return "text-green-600 bg-green-100";
      case "draft":
        return "text-blue-500 bg-blue-100";
      case "inactive":
        return "text-red-500 bg-red-100";
      default:
        return "";
    }
  }

  function handleCheckboxChange(value: string) {
    setSelectedStatuses((prev) => {
      const updatedStatuses = prev.includes(value)
        ? prev.filter((status) => status !== value)
        : [...prev, value];

      return updatedStatuses;
    });
  }

  function clearFilters() {
    setSelectedStatuses([]);
  }

  return (
    <div className="flex items-center space-x-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="secondary">
            <LucideGitPullRequestDraft />
            Status
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-48 " side="bottom" align="center">
          <Command>
            <CommandList>
              <CommandGroup>
                {statuses.map((status) => (
                  <CommandItem
                    key={status.value}
                    className="h-10 mb-2 flex items-center"
                    value={status.value}
                    onClick={() => handleCheckboxChange(status.value)}
                  >
                    <Checkbox
                      checked={selectedStatuses.includes(status.value)}
                      onCheckedChange={() => handleCheckboxChange(status.value)}
                      className="size-4 rounded-sm"
                    />
                    <div
                      className={`flex items-center gap-1 ${returnColor(
                        status.value
                      )} p-1 rounded-lg px-4 text-xs`}
                    >
                      {status.icon}
                      <span>{status.lable}</span>
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
                Clear
              </Button>
            </div>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
