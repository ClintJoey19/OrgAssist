"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { ChevronsUpDown } from "lucide-react";
import React from "react";
import WorkspaceDialogForm from "./WorkspaceDialogForm";

const WorkspaceSwitcher = () => {
  const { isMobile } = useSidebar();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
            <span>A</span>
          </div>
          <div className="">Select Workspace</div>
          <ChevronsUpDown className="ml-auto" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="max-w-[250px]"
        side={isMobile ? "bottom" : "right"}
      >
        <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
        <DropdownMenuItem>
          <div className="flex aspect-square size-6 items-center justify-center rounded-md bg-primary text-sidebar-primary-foreground">
            <span>A</span>
          </div>
          <span className="truncate">Workspace 1 hahahah hahahahah</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex aspect-square size-6 items-center justify-center rounded-md bg-primary text-sidebar-primary-foreground">
            <span>A</span>
          </div>
          <span>Workspace 2</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <WorkspaceDialogForm />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WorkspaceSwitcher;
