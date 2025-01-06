import { z } from "zod";

export const ProductSchema = z.object({
  productName: z
    .string()
    .min(1, "Product Name is required")
    .max(100, "Product Name must be 100 characters or less"),

  sku: z
    .string()
    .min(1, "SKU is required")
    .regex(/^[a-zA-Z0-9_]+$/, "SKU must be alphanumeric"),

  supplier: z
    .string()
    .min(1, "Supplier is required")
    .max(100, "Supplier name must be 100 characters or less"),

  quantity: z
    .number()
    .int("Quantity must be an integer")
    .nonnegative("Quantity cannot be negative"),
  price: z
    .union([z.string(), z.number()])
    .refine((val) => val !== "", {
      message: "Price is required",
    })
    .transform((val) => {
      // If it's an empty string this will fail validation
      if (val === "") return undefined;
      //Convert to number and fix to a decimal places
      const num = Number(val);
      return Number(num.toFixed(2));
    })
    .pipe(
      z
        .number({
          required_error: "Price is required",
          invalid_type_error: "Price must be a number",
        })
        .nonnegative("Price cannot be negative")
    ),
});
