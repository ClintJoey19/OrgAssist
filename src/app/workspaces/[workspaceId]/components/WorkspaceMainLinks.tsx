"use client";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  CircleHelp,
  LayoutGrid,
  Mail,
  Settings,
  Ticket,
  TicketPlus,
} from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const sidebarGroups = [
  {
    label: "General",
    links: [
      {
        label: "Dashboard",
        logo: LayoutGrid,
        href: "dashboard",
      },
      {
        label: "Messages",
        logo: Mail,
        href: "messages",
      },
    ],
  },
  {
    label: "My Tickets",
    links: [
      {
        label: "Create Ticket",
        logo: TicketPlus,
        href: "create-ticket",
      },
      {
        label: "Tickets",
        logo: Ticket,
        href: "tickets",
      },
    ],
  },
  {
    label: "Personalization",
    links: [
      {
        label: "Settings",
        logo: Settings,
        href: "settings",
      },
      {
        label: "Support & Feedback",
        logo: CircleHelp,
        href: "support",
      },
    ],
  },
];

const WorkspaceMainLinks = () => {
  const { workspaceId } = useParams();
  const pathname = usePathname();

  return (
    <>
      {sidebarGroups.map((group) => (
        <SidebarGroup key={group.label}>
          <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {group.links.map((link) => {
                const isActive = pathname.includes(link.href);

                return (
                  <SidebarMenuItem key={link.label}>
                    <SidebarMenuButton isActive={isActive} asChild>
                      <Link href={`/workspaces/${workspaceId}/${link.href}`}>
                        <link.logo /> {link.label}
                      </Link>
                    </SidebarMenuButton>
                    {/* <SidebarMenuBadge>9</SidebarMenuBadge> */}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  );
};

export default WorkspaceMainLinks;
