"use client";
import React, { useState } from "react";
import { Filter } from "lucide-react";
import DatePicker from "@/components/global/DatePicker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Separator } from "../ui/separator";

type Props = {};

const CustomFilters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleOpenChange = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClearFilters = () => {
    // clear filters search params
    // close popover
    setIsOpen(false);
  };

  const handleApplyFilters = () => {
    // create a url + search params generator

    // route to a new url

    // close popover
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <Filter className="h-5 w-5" />
          Filters
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end">
        <div className="flex flex-col gap-4">
          <div>
            <p className="title">Custom filters</p>
          </div>
          <Separator />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <p className="text-xs">Status</p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">None</SelectItem>
                    <SelectItem value="banana">Draft</SelectItem>
                    <SelectItem value="blueberry">Published</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs">Start date</p>
              <DatePicker />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs">End date</p>
              <DatePicker />
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between gap-2">
            <Button variant="outline" size="sm" onClick={handleClearFilters}>
              Clear
            </Button>
            <Button size="sm" onClick={handleApplyFilters}>
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CustomFilters;
