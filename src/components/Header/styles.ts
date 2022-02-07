import styled from "styled-components";

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  padding: ${({ theme }) => theme.sizes.large};
  background: ${({ theme }) => theme.colors.gradient};
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;
`;

export const HeaderContent = styled.div`
  width: 1216px;
  margin: 0 auto;

  display: flex;
  align-items: center;

  ${HeaderButtons} {
    margin-left: auto;
  }
`;

export const HeaderLogo = styled.image.attrs({
  src: "/images/logo-white.svg",
})`
  height: 40px;
`;

export const NavigationContainer = styled.nav`
  margin-left: 180px;
  color: ${({ theme }) => theme.colors.white};

  ul {
    list-style: none;
    display: flex;
  }

  li + li {
    margin-left: ${({ theme }) => theme.spacing.xxl}px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.header}px) {
    display: none;
  }
`;
