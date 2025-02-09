"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";
import { forwardRef } from "react";
import { NavigationButtonType } from "./NavigationGroup";

type Props = {
  link: NavigationButtonType;
};

const NavigationButton = forwardRef<HTMLButtonElement, Props>(
  ({ link }, ref) => {
    const { workspaceId } = useParams();

    return (
      <Button
        variant="outline"
        ref={ref}
        className="flex justify-start items-center gap-2"
        asChild
      >
        <Link
          key={link.label}
          href={`/workspaces/${workspaceId}/workspace-configuration/${link.href}`}
          className="w-full flex items-center gap-4 p-4 rounded-md"
        >
          <div className="text-primary">{link.logo}</div>
          <p className="truncate">{link.label}</p>
        </Link>
      </Button>
    );
  }
);

export default NavigationButton;
