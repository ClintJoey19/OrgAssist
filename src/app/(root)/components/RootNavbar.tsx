import Logo from "@/components/global/Logo";
import React from "react";
import Navlinks from "./Navlinks";
import Auth from "@/components/auth/Auth";

const RootNavbar = () => {
  return (
    <header className="w-full h-[8vh] z-50 fixed top-0 left-0 right-0">
      <div className="h-full flex justify-between items-center gap-4 container">
        <Logo />
        <Navlinks />
        <Auth isActionsVisible={true} />
      </div>
    </header>
  );
};

export default RootNavbar;
