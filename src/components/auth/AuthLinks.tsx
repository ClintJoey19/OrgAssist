import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const AuthLinks = () => {
  return (
    <div className="flex items-center gap-4">
      <Button variant="secondary" size="cta" asChild>
        <Link href="/sign-up">Sign Up</Link>
      </Button>
      <Button size="cta" asChild>
        <Link href="/sign-in">Sign In</Link>
      </Button>
    </div>
  );
};

export default AuthLinks;
