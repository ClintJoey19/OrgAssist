import React from "react";
import SearchBar from "@/components/global/SearchBar";
import CustomFilters from "@/components/global/CustomFilters";
import CustomSort from "@/components/global/CustomSort";

const TicketGroupSearchFilter = () => {
  return (
    <div className="flex gap-2 items-center">
      <SearchBar placeholder="Search ticket group" />
      <div>
        <CustomFilters />
      </div>
      <div>
        <CustomSort />
      </div>
    </div>
  );
};

export default TicketGroupSearchFilter;
