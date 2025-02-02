import React from "react";
import WorkspaceConfigurationNavigations from "./components/WorkspaceConfigurationNavigations";

const page = () => {
  return (
    <section className="workspace-page">
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col">
          <h3 className="h3">Workspace configuration</h3>
          <p className="sub-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            dolores dolorem optio libero eos doloribus!
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="h4">Setup</h4>
          </div>
          <WorkspaceConfigurationNavigations />
        </div>
      </div>
    </section>
  );
};

export default page;
