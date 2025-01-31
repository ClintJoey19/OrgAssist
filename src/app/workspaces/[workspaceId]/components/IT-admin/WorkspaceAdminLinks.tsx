"use client";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { MonitorCog, ScrollText, Tickets, Users } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const adminLinks = [
  {
    label: "Ticket management",
    logo: Tickets,
    href: "manage-tickets",
  },
  {
    label: "User management",
    logo: Users,
    href: "manage-users",
  },
  {
    label: "Workspace configuration",
    logo: MonitorCog,
    href: "workspace-configuration",
  },
  {
    label: "Audit logs",
    logo: ScrollText,
    href: "workspace-logs",
  },
];

const WorkspaceAdminLinks = () => {
  const { workspaceId } = useParams();
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Administration</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {adminLinks.map((link) => {
            const isActive = pathname.includes(link.href);

            return (
              <SidebarMenuItem key={link.label}>
                <SidebarMenuButton isActive={isActive} asChild>
                  <Link href={`/workspaces/${workspaceId}/${link.href}`}>
                    {<link.logo />} {link.label}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default WorkspaceAdminLinks;
