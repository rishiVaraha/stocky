"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductTable } from "../ProductTable/data-table";
import { columns } from "../ProductTable/columns";
import { useProductStore } from "@/store/useProductStore";
import { useEffect } from "react";
import { ProductDialog } from "../ProductDialog/product-dialog";

export function DataTable() {
  const { allProducts, loadProducts } = useProductStore();

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <Card className="mt-12 flex flex-col shadow-none border-none">
      <CardHeader className="flex justify-between p-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-bold text-[23px]">Products</CardTitle>
            <p className="text-sm text-slate-600">{allProducts.length}</p>
          </div>
          <ProductDialog />
        </div>
      </CardHeader>
      <CardContent>
        <ProductTable data={allProducts} columns={columns} />
      </CardContent>
    </Card>
  );
}
