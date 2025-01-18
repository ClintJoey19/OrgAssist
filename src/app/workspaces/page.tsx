import React from "react";
import CreateWorkspace from "./components/CreateWorkspace";
import WorkspaceList from "./components/WorkspaceList";
import WorkspaceFilterActions from "./components/WorkspaceFilterActions";

const page = () => {
  return (
    <section className="container flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold">Your workspaces</h2>
        <WorkspaceFilterActions />
      </div>
      <div className="min-h-[526px] bg-primary-foreground rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-4 p-4">
        <CreateWorkspace />
        <WorkspaceList />
      </div>
    </section>
  );
};

export default page;
