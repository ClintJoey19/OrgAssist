import { Mails, Tickets, UserRoundCog, Workflow } from "lucide-react";
import React from "react";
import WorkspaceConfigurationNavigationLink from "./WorkspaceConfigurationNavigationLink";

const navigationLinks = [
  {
    label: "Email templates",
    logo: <Mails />,
    href: "email-templates",
  },
  {
    label: "System roles",
    logo: <UserRoundCog />,
    href: "system-roles",
  },
  {
    label: "Ticket categories",
    logo: <Tickets />,
    href: "ticket-categories",
  },
  {
    label: "Ticket groups",
    logo: <Tickets />,
    href: "ticket-groups",
  },
  {
    label: "Workflows",
    logo: <Workflow />,
    href: "workflows",
  },
];

const WorkspaceConfigurationNavigations = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {navigationLinks.map((link) => (
        <WorkspaceConfigurationNavigationLink key={link.label} link={link} />
      ))}
    </div>
  );
};

export default WorkspaceConfigurationNavigations;
