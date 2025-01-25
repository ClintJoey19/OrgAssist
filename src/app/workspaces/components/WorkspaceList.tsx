import React from "react";
import WorkspaceListItem from "./WorkspaceListItem";

export type Workspace = {
  id: string;
  name: string;
};

const workspaces: Workspace[] = [
  {
    id: "1",
    name: "Workspace 1",
  },
  {
    id: "2",
    name: "Workspace 2",
  },
  {
    id: "3",
    name: "Workspace 3",
  },
  {
    id: "4",
    name: "Workspace 4",
  },
  {
    id: "5",
    name: "Workspace 5",
  },
  {
    id: "6",
    name: "Workspace 6",
  },
  {
    id: "7",
    name: "Workspace 7",
  },
  {
    id: "8",
    name: "Workspace 8",
  },
  {
    id: "9",
    name: "Workspace 9",
  },
  {
    id: "10",
    name: "Workspace 10",
  },
];

const WorkspaceList = () => {
  return workspaces.map((workspace) => (
    <WorkspaceListItem key={workspace.id} workspace={workspace} />
  ));
};

export default WorkspaceList;
