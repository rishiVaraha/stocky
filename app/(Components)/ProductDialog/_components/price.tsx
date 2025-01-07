import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext, Controller } from "react-hook-form";
import { MdError } from "react-icons/md";
import { NumericFormat } from "react-number-format";

export function Price() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="price" className="text-slate-600">
        Price
      </Label>
      <Controller
        name="price"
        control={control}
        render={({ field }) => (
          <NumericFormat
            value={field.value === 0 ? "" : field.value}
            onValueChange={(values) => {
              field.onChange(values.floatValue || null);
            }}
            customInput={Input}
            thousandSeparator
            decimalScale={2}
            allowNegative={false}
            placeholder="Price..."
            className="h-11"
          />
        )}
      />
      {errors.price && (
        <div className="text-red-500 flex gap-1 items-center text-base">
          <MdError />
          <p>{String(errors.price.message)}</p>
        </div>
      )}
    </div>
  );
}
