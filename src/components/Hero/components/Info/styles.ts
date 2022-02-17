import styled, { css } from "styled-components";

export const InfoContainer = styled.div`
  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.xl}px;
  }

  button {
    margin-bottom: ${({ theme }) => theme.spacing.xl * 2}px;
  }

  ${() => InfoContainerResponsive()}
`;

export const Bubbles = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg * 2}px;

  ${() => BubblesResponsive()}
`;

// responsive
const InfoContainerResponsive = () => css`
  @media (max-width: ${({ theme }) => theme.widths.xl}px) {
    h2 {
      margin-bottom: ${({ theme }) => theme.spacing.lg}px;
    }

    button {
      margin-bottom: ${({ theme }) => theme.spacing.lg * 2}px;
    }
  }

  @media (max-width: ${({ theme }) => theme.widths.lg}px) {
    button {
      margin: 0 auto;
      margin-bottom: ${({ theme }) => theme.spacing.xl * 1}px;
    }
  }
`;

const BubblesResponsive = () => css`
  @media (max-width: ${({ theme }) => theme.widths.sm}px) {
    flex-direction: column;
    align-items: flex-start;
    max-width: 260px;
    margin: 0 auto;
  }
`;
