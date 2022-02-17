import styled, { css } from "styled-components";

export const AccountContainer = styled.div`
  width: 800px;
  max-width: 100%;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  padding: ${({ theme }) => theme.spacing.xl * 2}px;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: ${({ theme }) => theme.spacing.sm}px;

  color: ${({ theme }) => theme.colors.bg};

  svg {
    position: absolute;
    height: 240px;
    top: 100px;
    right: -30px;
    z-index: 3;
  }

  ${() => CardResponsive()}
`;

export const CardSubtitle = styled.strong`
  font-weight: 600;
  font-size: ${({ theme }) => theme.sizes.xl};
  max-width: 380px;
  margin: ${({ theme }) => `${theme.spacing.xs}px 0`};

  ${() => TextsResponsive()};
`;

export const CardText = styled.p`
  max-width: 320px;

  ${() => TextsResponsive()};
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.xl}px;
  gap: ${({ theme }) => theme.spacing.md}px;

  ${() => ButtonsResponsive()};
`;

// responsive
const CardResponsive = () => css`
  @media (max-width: ${({ theme }) => theme.widths.sm}px) {
    align-items: center;
    text-align: center;
    padding: ${({ theme }) => theme.spacing.lg}px;

    svg {
      display: none;
    }
  }
`;

const TextsResponsive = () => css`
  @media (max-width: ${({ theme }) => theme.widths.md}px) {
    max-width: 260px;
  }
`;

const ButtonsResponsive = () => css`
  @media (max-width: ${({ theme }) => theme.widths.xs}px) {
    flex-direction: column;
  }
`;
