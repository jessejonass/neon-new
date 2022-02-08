import styled from "styled-components";

export const NavItemContainer = styled.div`
  transition: ease-in-out 0.2s;
  color: ${({ theme }) => theme.colors.bg};

  a {
    display: block;
    position: relative;
    padding: ${({ theme }) => `${theme.sizes.xxl} 0`};
  }

  a::after {
    content: "";
    position: absolute;

    bottom: ${({ theme }) => theme.spacing.lg}px;
    left: 50%;
    width: 0;
    height: 0.1rem;

    background: ${({ theme }) => theme.colors.bg};
    transition: ease-in-out 0.1s;
  }

  a:hover::after {
    width: 50%;
    left: 25%;
  }
`;
