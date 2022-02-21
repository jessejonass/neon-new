import styled, { css } from "styled-components";

export const BannersContainer = styled.div`
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  padding: ${({ theme }) => theme.spacing.xs}px;

  ${() => BannersContainerResponsive()};
`;

// responsivity
const BannersContainerResponsive = () => css`
  @media (max-width: ${({ theme }) => theme.widths.lg}px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xl * 3}px;
  }
`;
