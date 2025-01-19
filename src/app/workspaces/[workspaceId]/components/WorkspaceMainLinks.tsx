"use client";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LayoutGrid, Mail, Settings, Ticket } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const sidebarLinks = [
  {
    label: "Dashboard",
    logo: LayoutGrid,
    href: "/dashboard",
  },
  {
    label: "Tickets",
    logo: Ticket,
    href: "/tickets",
  },
  {
    label: "Messages",
    logo: Mail,
    href: "/messages",
  },
  {
    label: "Settings",
    logo: Settings,
    href: "/settings",
  },
];

const WorkspaceMainLinks = () => {
  const { workspaceId } = useParams();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Overview</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {sidebarLinks.map((link) => (
            <SidebarMenuItem key={link.label}>
              <SidebarMenuButton asChild>
                <Link href={`/workspaces/${workspaceId}/${link.href}`}>
                  <link.logo /> {link.label}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default WorkspaceMainLinks;
