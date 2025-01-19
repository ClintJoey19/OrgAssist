import Auth from "@/components/auth/Auth";
import Logo from "@/components/global/Logo";
import React from "react";

const WorkspacesNavbar = () => {
  return (
    <header className="w-full h-[8vh] z-50 fixed top-0 left-0 right-0 px-4">
      <div className="h-full w-full flex justify-between items-center gap-4">
        <Logo />
        <Auth />
      </div>
    </header>
  );
};

export default WorkspacesNavbar;
