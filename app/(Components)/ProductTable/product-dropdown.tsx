import { Row } from "@tanstack/react-table";
import { FaRegEdit } from "react-icons/fa";
import { MdContentCopy, MdOutlineDelete } from "react-icons/md";
import { Product } from "./columns";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { useProductStore } from "@/store/useProductStore";

type MenuItem = {
  icon: JSX.Element;
  label: string;
  className: string;
  separator?: undefined;
};

export function ProductDropdown({ row }: { row: Row<Product> }) {
  const { setSelectedProduct, setOpenDialog } = useProductStore();
  // console.log(row);

  const menuItems: MenuItem[] = [
    {
      icon: <MdContentCopy />,
      label: "Copy",
      className: "",
    },
    {
      icon: <FaRegEdit />,
      label: "Edit",
      className: "",
    },
    {
      icon: <MdOutlineDelete className="text-lg" />,
      label: "Delete",
      className: "text-red-600",
    },
  ];
  function handleClickedItem(item: MenuItem) {
    if (item.label === "Delete") {
      setOpenDialog(true);
      setSelectedProduct(row.original);
    }
  }

  return (
    <DropdownMenu>
      {/* Tigger drop down which is the more icon */}
      <DropdownMenuTrigger>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="py-1">
          {menuItems.map((item, index) =>
            item.separator ? (
              <DropdownMenuSeparator key={index} />
            ) : (
              <DropdownMenuItem
                key={index}
                className={`flex items-center gap-1 p-3 ${item.className}`}
                onClick={() => handleClickedItem(item)}
              >
                {item.icon}
                <span>{item.label}</span>
              </DropdownMenuItem>
            )
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
