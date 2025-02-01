"use client";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { TicketCheck, TicketPercent, TicketSlash, TicketX } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const staffLinks = [
  {
    label: "Assigned tickets",
    logo: TicketSlash,
    href: "assigned-tickets",
  },
  {
    label: "Unassigned tickets",
    logo: TicketPercent,
    href: "unassigned-tickets",
  },
  {
    label: "Escalated tickets",
    logo: TicketX,
    href: "escalated-tickets",
  },
  {
    label: "Resolved tickets",
    logo: TicketCheck,
    href: "resolved-tickets",
  },
];

type Props = {
  workspaceId: string | string[] | undefined;
  mainPath: string;
};

const WorkspaceStaffLinks = ({ workspaceId, mainPath }: Props) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>IT Staff</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {staffLinks.map((link) => {
            const isActive = mainPath === link.href;

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

export default WorkspaceStaffLinks;
