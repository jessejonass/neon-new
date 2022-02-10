import styled, { css } from "styled-components";

export const InfoItemContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxl}px;
  position: relative;

  width: 100%;

  padding: ${({ theme }) => `${theme.spacing.xl}px 0`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey100};

  ${() => InfoContainerResponsive()}
`;

export const IconContainer = styled.div`
  svg {
    height: ${({ theme }) => theme.spacing.xl * 2}px;
  }
`;

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: ${({ theme }) => theme.spacing.xl}px;
  padding-right: ${({ theme }) => theme.spacing.sm}px;

  h2 {
    color: ${({ theme }) => theme.colors.grey400};
  }
`;

export const Subtitle = styled.span`
  font-size: ${({ theme }) => theme.sizes.lg};
  color: ${({ theme }) => theme.colors.grey200};

  ${() => SubtitleResponsive()}
`;

export const ChevronContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;

  svg {
    height: ${({ theme }) => theme.sizes.sm};
  }
`;

// responsive
const InfoContainerResponsive = () => css`
  @media (max-width: ${({ theme }) => theme.widths.lg}px) {
    gap: ${({ theme }) => theme.spacing.sm}px;
  }
`;

const SubtitleResponsive = () => css`
  @media (max-width: ${({ theme }) => theme.widths.sm}px) {
    font-size: ${({ theme }) => theme.sizes.md};
  }
`;
