import styled from "styled-components";

export const InfoItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.xxl}px;

  width: 100%;

  padding: ${({ theme }) => `${theme.spacing.xl}px 0`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey100};
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

  h2 {
    color: ${({ theme }) => theme.colors.grey400};
  }
`;

export const Subtitle = styled.span`
  font-size: ${({ theme }) => theme.sizes.lg};
  color: ${({ theme }) => theme.colors.grey200};
`;

export const ChevronContainer = styled.div`
  margin-left: auto;
  svg {
    height: ${({ theme }) => theme.sizes.sm};
  }
`;
