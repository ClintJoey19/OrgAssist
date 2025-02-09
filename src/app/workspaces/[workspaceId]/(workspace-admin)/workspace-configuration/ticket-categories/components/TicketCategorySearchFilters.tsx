import CustomFilters from "@/components/global/CustomFilters";
import CustomSort from "@/components/global/CustomSort";
import SearchBar from "@/components/global/SearchBar";
import React from "react";

const TicketCategorySearchFilters = () => {
  return (
    <div className="flex gap-2 items-center">
      <SearchBar placeholder="Search ticket categories" />
      <CustomFilters />
      <CustomSort />
    </div>
  );
};

export default TicketCategorySearchFilters;
