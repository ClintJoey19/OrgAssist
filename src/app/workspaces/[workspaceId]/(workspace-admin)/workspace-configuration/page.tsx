import React from "react";
import NavigationGroup from "../../../../../components/global/NavigationGroup";
import { Mails, Tickets, UserRoundCog, Workflow } from "lucide-react";

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

const page = () => {
  return (
    <section className="workspace-page">
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col">
          <h3 className="h3">Workspace configuration</h3>
          <p className="sub-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            dolores dolorem optio libero eos doloribus!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="h4">Setup</h4>
          </div>
          <NavigationGroup navigationLinks={navigationLinks} />
        </div>
      </div>
    </section>
  );
};

export default page;
