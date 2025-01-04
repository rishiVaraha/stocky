import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdError } from "react-icons/md";

export function Quantity() {
  return (
    <div className="mt-5 flex flex-col gap-2">
      <Label htmlFor="quantity" className="text-slate-600">
        Quantity
      </Label>
      <Input
        type="text"
        id="quantity"
        className="h-11 shadow-none"
        placeholder="TechWorld"
      />
      <div className="text-red-500 flex gap-1 items-center text-base">
        <MdError />
        <p>The quantity is required</p>
      </div>
    </div>
  );
}
