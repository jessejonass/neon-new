import styled, { css, keyframes } from "styled-components";

export const IntroductionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xxl * 4}px;
  padding: ${({ theme }) =>
    `${theme.spacing.xxl * 2}px ${theme.spacing.xxl}px`};

  ${() => IntroductionContainerResponsive()}
`;

export const AppContainer = styled.div`
  svg {
    height: 600px;

    transition: 1s;
    transition-timing-function: ease-in;
  }
  ${() => AppContainerResponsive()}
`;

export const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  ${() => InfoContainerResponsive()}
`;

export const InfoTitleContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxl}px;
  ${() => InfoTitleContainerResponsive()}
`;

export const MoreContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl}px;
`;

export const MoreText = styled.span`
  color: ${({ theme }) => theme.colors.blue600};
  font-weight: 600;

  @keyframes blinker {
    from,
    49.9% {
      opacity: 0;
    }
    50%,
    to {
      opacity: 1;
    }
  }

  &:after {
    content: "__";
    margin-left: ${({ theme }) => theme.spacing.xs}px;
    color: ${({ theme }) => theme.colors.yellow600};
    animation: blinker 1s linear infinite;
  }
`;

// responsive
const IntroductionContainerResponsive = () => {
  const breakpoints = css`
    @media (max-width: ${({ theme }) => theme.widths.xl}px) {
      gap: ${({ theme }) => theme.spacing.xxl}px;
    }

    @media (max-width: ${({ theme }) => theme.widths.lg}px) {
      gap: 0;
    }

    @media (max-width: ${({ theme }) => theme.widths.md}px) {
      gap: 0;
    }
  `;

  return breakpoints;
};

const AppContainerResponsive = () => {
  const breakpoints = css`
    @media (max-width: ${({ theme }) => theme.widths.lg}px) {
      svg {
        transition: 1s;
        transition-timing-function: ease-in;
        transform: translateX(-80px);
      }
    }

    @media (max-width: ${({ theme }) => theme.widths.md}px) {
      svg {
        display: none;
      }
    }
  `;

  return breakpoints;
};

const InfoContainerResponsive = () => {
  const breakpoints = css`
    @media (max-width: ${({ theme }) => theme.widths.lg}px) {
      width: 100%;
    }
  `;

  return breakpoints;
};

const InfoTitleContainerResponsive = () => {
  const breakpoints = css`
    @media (max-width: ${({ theme }) => theme.widths.md}px) {
      display: flex;
      justify-content: center;
      text-align: center;
    }
  `;

  return breakpoints;
};
