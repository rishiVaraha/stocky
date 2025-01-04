import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdError } from "react-icons/md";
import { NumericFormat } from "react-number-format";

export function Supplier() {
  return (
    <div className="mt-5 flex flex-col gap-2">
      <Label htmlFor="price" className="text-slate-600">
        Price
      </Label>
      <NumericFormat
        value={0}
        className="h-11"
        customInput={Input}
        thousandSeparator
        placeholder="Price..."
      />
      <div className="text-red-500 flex gap-1 items-center text-base">
        <MdError />
        <p>The Price is required</p>
      </div>
    </div>
  );
}
