import styled, { css } from "styled-components";

export const BannersContainer = styled.div`
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  ${() => BannersContainerResponsive()};
`;

export const DownloadOurAppContainer = styled.div`
  display: block;
`;

export const AppContainer = styled.div`
  display: none;

  svg {
    height: 540px;
  }
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

  text-align: center;
  color: ${({ theme }) => theme.colors.grey500};
  font-size: ${({ theme }) => theme.sizes.lg};
  line-height: ${({ theme }) => theme.spacing.lg}px;
`;

export const PJBannerAccountContainer = styled.div`
  width: 800px;
  max-width: 100%;
`;

export const PJBannerCardContainer = styled.div`
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

  ${() => PJBannerCardContainerResponsive()}
`;

export const PJBannerCardSubtitle = styled.strong`
  font-weight: 600;
  font-size: ${({ theme }) => theme.sizes.xl};
  max-width: 380px;
  margin: ${({ theme }) => `${theme.spacing.xs}px 0`};

  ${() => PJBannerCardTextsResponsive()};
`;

export const PJBannerCardText = styled.p`
  max-width: 320px;

  ${() => PJBannerCardTextsResponsive()};
`;

export const PJBannersButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.xl}px;
  gap: ${({ theme }) => theme.spacing.md}px;

  ${() => PJBannersButtonsContainerResponsive()};
`;

// responsivity
const BannersContainerResponsive = () => css`
  @media (max-width: ${({ theme }) => theme.widths.lg}px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xl * 3}px;
  }
`;

const PJBannerCardContainerResponsive = () => css`
  @media (max-width: ${({ theme }) => theme.widths.sm}px) {
    align-items: center;
    text-align: center;
    padding: ${({ theme }) => theme.spacing.lg}px;

    svg {
      display: none;
    }
  }
`;

const PJBannerCardTextsResponsive = () => css`
  @media (max-width: ${({ theme }) => theme.widths.md}px) {
    max-width: 260px;
  }
`;

const PJBannersButtonsContainerResponsive = () => css`
  @media (max-width: ${({ theme }) => theme.widths.xs}px) {
    flex-direction: column;
  }
`;
