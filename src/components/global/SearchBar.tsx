"use client";
import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  placeholder: string;
};

const SearchBar = ({ placeholder }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // todo:
  // create a url + search params builder
  // add a debounce when searching
  // route to a new url after debounce

  return (
    <div className="relative">
      <div className="h-full absolute flex items-center pl-2">
        <Search className="h-4 w-4 text-muted-foreground" />
      </div>
      <Input
        className="pl-8 bg-background"
        placeholder={placeholder ? placeholder : "Search"}
      />
    </div>
  );
};

export default SearchBar;
