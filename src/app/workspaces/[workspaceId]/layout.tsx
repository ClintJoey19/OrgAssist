import React from "react";
import Sidebar from "./components/Sidebar";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <main className="grid grid-cols-[250px_1fr]">
      <Sidebar />
      <section className="h-[92vh]">{children}</section>
    </main>
  );
};

export default layout;
