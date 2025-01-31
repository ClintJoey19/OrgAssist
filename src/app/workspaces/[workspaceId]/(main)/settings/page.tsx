import React from "react";
import ThemeListItems from "./components/themes/ThemeListItems";

const page = () => {
  return (
    <section className="flex flex-col gap-4 p-4">
      <div>
        <h3 className="h3">Settings</h3>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h4 className="title">Appearance</h4>
          <p className="sub-text">
            Customize the appearance of your website by switching between
            system, light, and dark themes.
          </p>
        </div>
        <ThemeListItems />
      </div>
    </section>
  );
};

export default page;
