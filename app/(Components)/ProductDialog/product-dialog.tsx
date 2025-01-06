import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Status } from "./_components/status";
import { ProductCategory } from "./_components/product-category";
import { SKU } from "./_components/sku";
import { Supplier } from "./_components/supplier";
import { Quantity } from "./_components/quantity";
import { Price } from "./_components/price";
import { ProductName } from "./_components/product-name";
import { ReactNode, useState } from "react";
import { Product } from "../ProductTable/columns";
import { FormProvider, useForm } from "react-hook-form";
import { ProductSchema } from "@/validation/formShema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { nanoid } from "nanoid";

export function ProductDialog() {
  const methods = useForm<ProductFormData>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      productName: "",
      sku: "",
      supplier: "",
      quantity: 0,
      price: 0.0,
    },
  });

  const { reset } = methods;

  const [selectedtab, setSelectedtab] =
    useState<Product["status"]>("Published");

  const [selectedIcon, setSelectedIcon] = useState<null | ReactNode>(null);

  const [selectedCategory, setSelectedCategory] =
    useState<Product["category"]>("Electronics");

  type ProductFormData = z.infer<typeof ProductSchema>;

  const onSubmit = (data: ProductFormData) => {
    console.log("Sumitted data:", data);
    const newProduct: Product = {
      id: nanoid(),
      supplier: data.supplier,
      name: data.productName,
      price: data.price,
      quantityInStock: data.quantity,
      sku: data.sku,
      status: selectedtab,
      category: selectedCategory,
      icon: selectedIcon,
      createdAt: new Date(),
    };
    console.log(newProduct);
  };

  function handleReset() {
    reset();
  }

  function onSelectedIcon(icon: ReactNode) {
    console.log(icon);

    setTimeout(() => {
      setSelectedIcon(icon);
    }, 0);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-10">Add Product</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Add Product</DialogTitle>
          <DialogDescription>
            Fill in the from to add a new product
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 mt-1">
              <div className="grid grid-cols-2 gap-7">
                <ProductName onSelectedIcon={onSelectedIcon} />
                <SKU />
              </div>

              <div className="grid grid-cols-2 gap-5 items-center">
                <Supplier />
                <ProductCategory
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </div>
              <div className="grid grid-cols-3 gap-2 items-baseline">
                <Status
                  selectedTab={selectedtab}
                  setSelectedTab={setSelectedtab}
                />
                <Quantity />
                <Price />
              </div>
            </div>

            <DialogFooter className="mt-9 mb-4 flex items-center gap-4">
              <DialogClose
                onClick={() => {
                  handleReset();
                }}
                asChild
              >
                <Button asChild variant="secondary" className="h-11 px-11">
                  Cancel
                </Button>
              </DialogClose>
              <Button className="h-11 px-11">Add Product</Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
