import { FC } from "react";
import Image from "next/image";

import {
  HeaderButtons,
  HeaderContainer,
  HeaderContent,
  NavigationContainer,
} from "./styles";
import Button from "components/Button";
import Link from "components/Link";
import MenuButton from "./MenuButton";

const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image
          src="/assets/logo-white.svg"
          alt="Logo Neon"
          height={30}
          width={130}
        />

        <NavigationContainer>
          <ul>
            <li>
              <Link href="/">Produtos Neon</Link>
            </li>

            <li>
              <Link href="/">Conta digital PJ</Link>
            </li>

            <li>
              <Link href="/">Quem somos</Link>
            </li>

            <li>
              <Link href="/">Blog</Link>
            </li>

            <li>
              <Link href="/">Ajuda</Link>
            </li>
          </ul>
        </NavigationContainer>

        <HeaderButtons>
          <Button variant="light">Abra sua conta digital</Button>
          <MenuButton />
        </HeaderButtons>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
