import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdError } from "react-icons/md";

export function Supplier() {
  return (
    <div className="mt-5 flex flex-col gap-2">
      <Label htmlFor="supplier-name" className="text-slate-600">
        Supplier&apos;s name
      </Label>
      <Input
        type="text"
        id="supplier-name"
        className="h-11 shadow-none"
        placeholder="TechWorld"
      />
      <div className="text-red-500 flex gap-1 items-center text-base">
        <MdError />
        <p>{`Supplier's name is required`}</p>
      </div>
    </div>
  );
}
