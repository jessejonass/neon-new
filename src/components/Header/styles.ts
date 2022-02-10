import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.sm}px;
  background: ${({ theme }) => theme.colors.gradient};
  border-bottom: 1px solid ${({ theme }) => theme.colors.bg};

  svg {
    height: ${({ theme }) => theme.sizes.xxl};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: ${({ theme }) => theme.widths.lg}px;
  padding-top: ${({ theme }) => theme.sizes.md};
  padding-bottom: ${({ theme }) => theme.sizes.xxs};

  ${() => ResponsiveHeaderContent()}
`;

export const NavigationContainer = styled.nav`
  display: flex;
  margin-left: ${({ theme }) => theme.spacing.xxl * 3}px;
  margin-right: ${({ theme }) => theme.spacing.xxl * 2}px;
  gap: ${({ theme }) => theme.spacing.xxl}px;

  ${() => NavigationContainerResponsive()}
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  svg {
    height: ${({ theme }) => theme.sizes.xl};
  }

  ${() => HeaderButtonsContainerResponsive()}
`;

// responsive
const ResponsiveHeaderContent = () => css`
  @media (max-width: ${({ theme }) => theme.widths.lg}px) {
    padding: ${({ theme }) => `${theme.sizes.xxl} 0`};
  }
`;

const NavigationContainerResponsive = () => css`
  @media (max-width: ${({ theme }) => theme.widths.lg}px) {
    display: none;
  }
`;

const HeaderButtonsContainerResponsive = () => css`
  button:last-child {
    display: none;
    padding: 0;
    margin-left: ${({ theme }) => theme.spacing.xxl}px;

    @media (max-width: ${({ theme }) => theme.widths.lg}px) {
      display: block;
    }
  }

  @media (max-width: ${({ theme }) => theme.widths.sm}px) {
    button:first-child {
      display: none;
    }
  }
`;
