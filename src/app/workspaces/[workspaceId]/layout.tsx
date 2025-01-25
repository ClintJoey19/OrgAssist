import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import WorkspaceSidebar from "./components/WorkspaceSidebar";
import WorkspaceNavbar from "./components/WorkspaceNavbar";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <WorkspaceSidebar />
      <main className="w-full">
        <WorkspaceNavbar />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default layout;
