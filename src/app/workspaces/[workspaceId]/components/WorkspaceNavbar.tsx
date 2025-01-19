import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Logo from "@/components/global/Logo";
import Auth from "@/components/auth/Auth";

const WorkspaceNavbar = () => {
  return (
    <div className="h-[5vh] w-full flex justify-between items-center border-b border-slate-200 px-4">
      <div className="h-full flex items-center gap-2">
        <SidebarTrigger />
        <Logo />
      </div>
      <div>
        <Auth />
      </div>
    </div>
  );
};

export default WorkspaceNavbar;
