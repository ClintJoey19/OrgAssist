import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  // SidebarMenuBadge,
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
  UserRoundPen,
} from "lucide-react";
import Link from "next/link";
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
        label: "Create ticket",
        logo: TicketPlus,
        href: "create-ticket",
      },
      {
        label: "Tickets",
        logo: Ticket,
        href: "tickets",
      },
      {
        label: "Tickets to approve",
        logo: UserRoundPen,
        href: "approve-tickets",
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
        label: "Support & feedback",
        logo: CircleHelp,
        href: "support",
      },
    ],
  },
];

type Props = {
  workspaceId: string | string[] | undefined;
  mainPath: string;
};

const WorkspaceMainLinks = ({ workspaceId, mainPath }: Props) => {
  return (
    <>
      {sidebarGroups.map((group) => (
        <SidebarGroup key={group.label}>
          <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {group.links.map((link) => {
                const isActive = mainPath === link.href;

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
