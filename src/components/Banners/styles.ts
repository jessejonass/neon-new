import styled from "styled-components";

export const BannersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  display: flex;
  gap: ${({ theme }) => theme.spacing.xxl * 3}px;
  overflow: hidden;
`;

export const DownloadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DownloadLogoContainer = styled.div`
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

export const DownloadSubtitle = styled.span`
  max-width: 270px;
  margin-top: ${({ theme }) => theme.spacing.xs}px;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;

  font-size: ${({ theme }) => theme.sizes.lg};
  text-align: center;
  line-height: ${({ theme }) => theme.spacing.lg}px;
  color: ${({ theme }) => theme.colors.grey500};
`;

export const PJBannerAccountContainer = styled.div``;

export const PJBannerCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 800px;
  max-width: 100%;
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
`;

export const PJBannerCardSubtitle = styled.strong`
  font-weight: 600;
  font-size: ${({ theme }) => theme.sizes.xl};
  max-width: 380px;
  margin: ${({ theme }) => `${theme.spacing.xs}px 0`};
`;

export const PJBannerCardText = styled.p`
  max-width: 320px;
`;

export const PJBannersButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.xl}px;
  gap: ${({ theme }) => theme.spacing.md}px;
`;
