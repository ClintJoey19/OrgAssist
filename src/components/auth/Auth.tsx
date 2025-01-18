import React from "react";
import UserAvatar from "../global/UserAvatar";
import AuthLinks from "./AuthLinks";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Auth = ({ isActionsVisible = false }) => {
  const isLoggedIn = true;

  return (
    <div className="flex items-center gap-4">
      {isLoggedIn ? (
        <>
          {isActionsVisible && (
            <Button asChild>
              <Link href="/workspaces">
                Workspaces <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          )}
          <UserAvatar />
        </>
      ) : (
        <AuthLinks />
      )}
    </div>
  );
};

export default Auth;
