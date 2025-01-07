import { Card } from "@/components/ui/card";
import { AppHeader } from "./(Components)/Header/app-header";
import { DataTable } from "./(Components)/ProductHeader/product-header";
import { DeleteDialog } from "./(Components)/ProductTable/DeleteDialog";

export default function Home() {
  return (
    <div className="p-4">
      <Card className="flex flex-col shadow-none p-2">
        <DeleteDialog />
        <AppHeader />
        <DataTable />
      </Card>
    </div>
  );
}
