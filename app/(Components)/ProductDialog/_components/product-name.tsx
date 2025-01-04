import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdError } from "react-icons/md";

export function ProductName() {
  return (
    <div className="mt-5 flex flex-col gap-2">
      <Label htmlFor="product-name" className="text-slate-600">
        Product&apos;s Name
      </Label>
      <div className="flex gap-2 items-center">
        <Input
          type="text"
          id="product-name"
          className="h-11 shadow-none"
          placeholder="Laptops..."
        />
        <IoconSelector />
      </div>
      <div className="text-red-500 flex gap-1 items-center text-base">
        <MdError />
        <p>The Product name is required</p>
      </div>
    </div>
  );
}
