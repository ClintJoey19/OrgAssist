import React from "react";

const DotBackground = () => {
  return (
    <div
      className="absolute -z-1 inset-0 h-full w-full bg-sidebar
bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
bg-[size:20px_20px]"
    />
  );
};

export default DotBackground;
