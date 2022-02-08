import { FC } from "react";

import {
  HeaderContainer,
  HeaderContent,
  NavigationContainer,
  HeaderButtonsContainer,
} from "./styles";

import Button from "components/Button";
import NavItem from "./components/NavItem";
import { LogoWhite, SandwichMenu } from "components/Icons";

const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoWhite />

        <NavigationContainer>
          <NavItem href="/" text="Produtos Neon" />
          <NavItem href="/" text="Conta digital PJ" />
          <NavItem href="/" text="Quem somos" />
          <NavItem href="/" text="Blog" />
          <NavItem href="/" text="Ajuda" />
        </NavigationContainer>

        <HeaderButtonsContainer>
          <Button variant="light">Abra sua conta digital</Button>

          <Button>
            <SandwichMenu />
          </Button>
        </HeaderButtonsContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
