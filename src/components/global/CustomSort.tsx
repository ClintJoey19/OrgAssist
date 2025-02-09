"use client";
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
import { Button } from "@/components/ui/button";
import { ArrowDownUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const CustomSort = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleOpenChange = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClearSort = () => {
    // clear sort search params
    // close popover
    setIsOpen(false);
  };

  const handleApplySort = () => {
    // create a url + search params generator

    // route to a new url

    // close popover
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          <ArrowDownUp className="h-5 w-5" />
          Sort
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end">
        <div className="flex flex-col gap-4">
          <div>
            <p className="title">Custom sort</p>
          </div>
          <Separator />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <p className="text-xs">Sort by</p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent align="end">
                  <SelectGroup>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="createdAt">Created at</SelectItem>
                    <SelectItem value="updatedAt">Updated at</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs">Sort direction</p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sort direction" />
                </SelectTrigger>
                <SelectContent align="end">
                  <SelectGroup>
                    <SelectItem value="createdAt">Ascending</SelectItem>
                    <SelectItem value="updatedAt">Descending</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Separator />
          <div className="flex justify-between items-center gap-4">
            <Button size="sm" variant="outline" onClick={handleClearSort}>
              Clear
            </Button>
            <Button size="sm" onClick={handleApplySort}>
              Apply
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CustomSort;
