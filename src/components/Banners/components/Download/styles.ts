import styled from "styled-components";

export const DownloadContainer = styled.div`
  display: block;
`;

export const AppContainer = styled.div`
  display: none;

  svg {
    height: 540px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl}px;

  width: 65px;
  height: 70px;

  background: ${({ theme }) => theme.colors.gradient};
  border-radius: ${({ theme }) => theme.spacing.xs}px;

  svg {
    width: ${({ theme }) => theme.sizes.xxl};
  }
`;

export const Subtitle = styled.span`
  max-width: 270px;
  margin-top: ${({ theme }) => theme.spacing.xs}px;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;

  text-align: center;
  color: ${({ theme }) => theme.colors.grey500};
  font-size: ${({ theme }) => theme.sizes.lg};
  line-height: ${({ theme }) => theme.spacing.lg}px;
`;
