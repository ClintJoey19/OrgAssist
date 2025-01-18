import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <Image src="/logo.svg" alt="Logo" width={30} height={30} />
      <p className="logo-text">OrgAssist</p>
    </Link>
  );
};

export default Logo;
