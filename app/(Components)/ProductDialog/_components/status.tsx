import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";
import { FaCheck, FaInbox } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export function Status() {
  const [selectedTab, setSelectedTab] = useState("published");
  console.log(selectedTab);

  return (
    <div>
      <Label className="text-slate-600">Status</Label>
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mt-1">
        <TabsList className="h-11 px-2">
          <TabsTrigger
            className={`h-8 ${
              selectedTab === "published" ? "text-red-500" : ""
            }`}
            value="published"
          >
            <FaCheck className="pr-1" />
            Published
          </TabsTrigger>
          <TabsTrigger
            className={`h-8 ${
              selectedTab === "inactive" ? "text-red-500" : ""
            }`}
            value="inactive"
          >
            <IoClose />
            Inactive
          </TabsTrigger>
          <TabsTrigger className="h-8 px-3" value="draft">
            <FaInbox className="pr-1" />
            Draft
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
