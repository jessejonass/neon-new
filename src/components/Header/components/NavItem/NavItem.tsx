import Link from "components/Link";
import { FC } from "react";

import { NavItemContainer } from "./styles";
import { NavItemProps } from "./types";

const NavItem: FC<NavItemProps> = ({ href, text }) => {
  return (
    <NavItemContainer>
      <Link href={href}>{text}</Link>
    </NavItemContainer>
  );
};

export default NavItem;
