import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductsTable } from "../ProductsTable/product-table";

export function DataTable() {
  return (
    <Card className="mt-12 flex flex-col shadow-none border-none">
      <CardHeader className="flex justify-between p-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-bold text-[23px]">Products</CardTitle>
            <p className="text-sm text-slate-600">34 Products</p>
          </div>
          <Button>Add Products</Button>
        </div>
      </CardHeader>
      <CardContent>
        <ProductsTable />
      </CardContent>
    </Card>
  );
}
