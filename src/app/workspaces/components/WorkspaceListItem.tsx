import React, { forwardRef } from "react";
import { Workspace } from "./WorkspaceList";
import WorkspaceItemCard from "./WorkspaceItemCard";
import Link from "next/link";

type Props = {
  workspace: Workspace;
};

const WorkspaceListItem = forwardRef<HTMLDivElement, Props>(
  ({ workspace }, ref) => {
    return (
      <WorkspaceItemCard ref={ref}>
        <Link
          href={`/workspaces/${workspace.id}`}
          className="h-full w-full flex flex-col gap-2"
        >
          <p className="text-lg font-medium">{workspace.name}</p>
        </Link>
      </WorkspaceItemCard>
    );
  }
);

export default WorkspaceListItem;
