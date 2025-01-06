import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";
import { MdError } from "react-icons/md";
import { NumericFormat } from "react-number-format";

export function Price() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="price" className="text-slate-600">
        Price
      </Label>
      <NumericFormat
        {...register("price")}
        value={0}
        className="h-11"
        customInput={Input}
        thousandSeparator
        placeholder="Price..."
      />
      {errors.price && (
        <div className="text-red-500 flex gap-1 items-center text-base">
          <MdError />
          <p>
            <>{errors.price.message}</>
          </p>
        </div>
      )}
    </div>
  );
}
