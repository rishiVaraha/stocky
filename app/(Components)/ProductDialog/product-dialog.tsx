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

export function ProductDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="h-10">Add Product</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Add Product</DialogTitle>
          <DialogDescription>
            Fill in the from to add a new product
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <div className="flex flex-col gap-2 mt-1">
          <div className="grid grid-cols-2 gap-7">
            <ProductName />
            <SKU />
          </div>

          <div className="grid grid-cols-2 gap-5 items-center">
            <Supplier />
            <ProductCategory />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-7 max-lg:grid-cols-2 max-lg-gap-2 max-lg:gap-1 max-sm:grid-cols-1">
            <Status />
            <Quantity />
            <Price />
          </div>
        </div>
        <DialogFooter className="mt-9 mb-4 flex items-center gap-4">
          <DialogClose>
            <Button asChild variant="secondary" className="h-11 px-11">
              Cancel
            </Button>
          </DialogClose>
          <Button className="h-11 px-11">Add Product</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
