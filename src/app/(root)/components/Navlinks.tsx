import { rootNavlinks } from "@/constants";
import Link from "next/link";
import React from "react";

const Navlinks = () => {
  return (
    <nav>
      <ul className="flex gap-10">
        {rootNavlinks.map((link) => (
          <li
            key={link.label}
            className="text-muted-foreground hover:text-primary transition"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navlinks;
