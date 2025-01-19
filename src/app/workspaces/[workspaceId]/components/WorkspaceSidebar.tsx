import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupContent,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import WorkspaceSwitcher from "./WorkspaceSwitcher";
import WorkspaceMainLinks from "./WorkspaceMainLinks";
import PinnedTicketsGroup from "./pinned-tickets/PinnedTicketsGroup";

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <WorkspaceSwitcher />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <WorkspaceMainLinks />
        <PinnedTicketsGroup />
      </SidebarContent>
      {/* <SidebarFooter>Footer</SidebarFooter> */}
    </Sidebar>
  );
};

export default AppSidebar;
