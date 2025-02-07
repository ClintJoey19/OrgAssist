import { ReactNode } from "react";
import NavigationButton from "@/components/global/NavigationButton";

export type NavigationButtonType = {
  label: string;
  logo: ReactNode;
  href: string;
};

type Props = {
  navigationLinks: NavigationButtonType[];
};

const NavigationGroup = ({ navigationLinks }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {navigationLinks.map((link) => (
        <NavigationButton key={link.label} link={link} />
      ))}
    </div>
  );
};

export default NavigationGroup;
