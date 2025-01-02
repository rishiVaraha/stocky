import { Card } from "@/components/ui/card";
import { AppHeader } from "./(Components)/Header/app-header";
import { DataTable } from "./(Components)/ProductHeader/product-header";

export default function Home() {
  return (
    <div className="p-4">
      <Card className="flex flex-col shadow-none p-2">
        <AppHeader />
        <DataTable />
      </Card>
    </div>
  );
}
