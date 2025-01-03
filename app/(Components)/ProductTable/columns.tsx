"use client";

import { IconType } from "react-icons/lib";
import { ColumnDef } from "@tanstack/react-table";
import { ReactNode } from "react";
import { FaCheck, FaInbox } from "react-icons/fa";
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

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Name",
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
  },
  {
    accessorKey: "sku",
    header: "SKU",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ getValue }) => `₹${getValue<number>().toFixed(2)}`,
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "status",
    header: "Status",
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
          className={`px-3 py-0.5 rounded-full font-medium flex items-center w-fit ${colorClass}`}
        >
          {icon}
          <span className="text-xs">{status}</span>
        </span>
      );
    },
  },
  {
    accessorKey: "quantityInStock",
    header: "Quantity In Stock",
  },
  {
    accessorKey: "supplier",
    header: "Supplier",
  },
];
