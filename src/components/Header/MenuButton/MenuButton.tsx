import { FC } from "react";
import Image from "next/image";

import { MenuContainer } from "./styles";

const MenuButton: FC = () => {
  return (
    <MenuContainer>
      <Image
        src="/assets/sandwich-menu.svg"
        alt="Logo Neon"
        height={26}
        width={26}
      />
    </MenuContainer>
  );
};

export default MenuButton;
