"use client";
import { SidebarContent } from "@/components/ui/sidebar";
import { useParams, usePathname } from "next/navigation";
import WorkspaceMainLinks from "./WorkspaceMainLinks";
import WorkspaceStaffLinks from "./IT-staff/WorkspaceStaffLinks";
import WorkspaceAdminLinks from "./IT-admin/WorkspaceAdminLinks";
import PinnedTicketsGroup from "./pinned-tickets/PinnedTicketsGroup";

const WorkspaceSidebarContent = () => {
  const { workspaceId } = useParams();
  const pathname = usePathname();
  const mainPath = pathname.split("/")[3];

  return (
    <SidebarContent>
      <WorkspaceMainLinks workspaceId={workspaceId} mainPath={mainPath} />
      <WorkspaceStaffLinks workspaceId={workspaceId} mainPath={mainPath} />
      <WorkspaceAdminLinks workspaceId={workspaceId} mainPath={mainPath} />
      <PinnedTicketsGroup />
    </SidebarContent>
  );
};

export default WorkspaceSidebarContent;
