import styled from "styled-components";

export const BubbleContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.bg};
`;

export const BubbleCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.sm}px;

  background: ${({ theme }) => theme.colors.gradient};
  border-radius: 50%;
  width: 48px;
  height: 48px;

  svg {
    height: ${({ theme }) => theme.sizes.lg};
  }

  @media (max-width: ${({ theme }) => theme.widths.sm}px) {
    background: none;
  }
`;

export const BubbleText = styled.span`
  line-height: ${({ theme }) => theme.spacing.lg}px;
  max-width: 130px;

  @media (max-width: ${({ theme }) => theme.widths.sm}px) {
    max-width: 100%;
  }
`;
