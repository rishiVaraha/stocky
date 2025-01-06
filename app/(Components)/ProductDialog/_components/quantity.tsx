import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";
import { MdError } from "react-icons/md";

export function Quantity() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="mt-5 flex flex-col gap-2">
      <Label htmlFor="quantity" className="text-slate-600">
        Quantity
      </Label>
      <Input
        {...register("quantity", { valueAsNumber: true })}
        type="text"
        id="quantity"
        className="h-11 shadow-none"
        placeholder="34"
      />
      {errors.quantity && (
        <div className="text-red-500 flex gap-1 items-center text-base">
          <MdError />
          <p>
            <>{errors.quantity.message}</>
          </p>
        </div>
      )}
    </div>
  );
}
