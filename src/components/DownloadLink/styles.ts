import styled from "styled-components";
import Link from "components/Link";

export const DownloadLinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm}px;

  height: ${({ theme }) => theme.spacing.xl * 2}px;
  width: ${({ theme }) => theme.spacing.xxl * 5}px;
  background: ${({ theme }) => theme.colors.grey600};
  color: ${({ theme }) => theme.colors.bg};
  border-radius: ${({ theme }) => theme.spacing.sm}px;

  svg {
    height: ${({ theme }) => theme.spacing.xl}px;
  }

  & + a {
    margin-top: ${({ theme }) => theme.spacing.md}px;
  }
`;

export const DownloadLinkTexts = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: ${({ theme }) => theme.sizes.xs};
    margin-bottom: ${({ theme }) => theme.spacing.xxs - 2}px;
  }

  strong {
    font-size: ${({ theme }) => theme.sizes.md};
    font-weight: 600;
  }
`;
