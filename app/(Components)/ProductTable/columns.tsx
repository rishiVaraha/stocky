"use client";

import { IconType } from "react-icons/lib";
import { Column, ColumnDef } from "@tanstack/react-table";
import { ReactNode } from "react";
import { FaCheck, FaInbox } from "react-icons/fa";
import { ProductDropdown } from "./product-dropdown";

import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { ArrowUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export type Product = {
  id: number;
  name: string;
  supplier: string;
  sku: string;
  category:
    | "Electronics"
    | "Clothing"
    | "Books"
    | "Food"
    | "Furniture"
    | "Other"
    | "Toys"
    | "Home Decor"
    | "Sports"
    | "Home Appliances"
    | "Beauty";
  status: "Published" | "Inactive" | "Draft";
  quantityInStock: number;
  price: number;
  icon: IconType;
};

type SortableHeaderProps = {
  column: Column<Product, unknown>;
  lable: string;
};

const SortableHeader: React.FC<SortableHeaderProps> = ({ column, lable }) => {
  const isSorted = column.getIsSorted();
  const SortingIcon =
    isSorted === "asc"
      ? IoMdArrowDown
      : isSorted === "desc"
      ? IoMdArrowUp
      : ArrowUpDown;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" aria-label={`Sort by ${lable}`}>
          {lable}
          <SortingIcon className="ml-2 h-2 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" side="bottom">
        <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
          <IoMdArrowUp className="mr-2 h-4 w-4" />
          Asc
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
          <IoMdArrowDown className="mr-2 h-4 w-4" />
          Desc
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    cell: ({ row }) => {
      const Icon = row.original.icon;
      const name = row.original.name;
      return (
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-sm bg-primary/10">
            <Icon className="text-lg text-primary" />
          </div>
          <span>{name}</span>
        </div>
      );
    },
    header: ({ column }) => <SortableHeader column={column} lable="Name" />,
  },

  {
    accessorKey: "sku",
    header: ({ column }) => <SortableHeader column={column} lable="Sku" />,
  },
  {
    accessorKey: "price",
    header: ({ column }) => <SortableHeader column={column} lable="Price" />,
    cell: ({ getValue }) => `₹${getValue<number>().toFixed(2)}`,
  },
  {
    accessorKey: "category",
    header: ({ column }) => <SortableHeader column={column} lable="Category" />,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <SortableHeader column={column} lable="Status" />,
    cell: ({ row }) => {
      const status = row.original.status;
      let colorClass;
      let icon: ReactNode;

      //Apply color and icon based on status

      switch (status) {
        case "Published":
          colorClass = "text-green-500 bg-green-100";
          icon = <FaCheck className="text-xs" />;
          break;
        case "Inactive":
          colorClass = "text-red-500 bg-red-100";
          icon = <FaInbox />;
          break;
        case "Draft":
          colorClass = "text-blue-500 bg-blue-100";
          icon = <FaInbox />;
          break;
        default:
          colorClass = "text-gray-600 bg-gray-200";
          icon = <FaInbox />;
      }
      return (
        <span
          className={`px-3 py-0.5 rounded-full font-medium flex items-center gap-1 w-fit ${colorClass}`}
        >
          {icon}
          <span className="text-xs">{status}</span>
        </span>
      );
    },
  },
  {
    accessorKey: "quantityInStock",
    header: ({ column }) => (
      <SortableHeader column={column} lable="Quantity In Stock" />
    ),
  },
  {
    accessorKey: "supplier",
    header: ({ column }) => <SortableHeader column={column} lable="Supplier" />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <ProductDropdown row={row} />;
    },
  },
];
