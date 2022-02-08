import styled, { css } from "styled-components";
import { ButtonVariants, StylesProps } from "./types";

export const ButtonContainer = styled.button<Required<StylesProps>>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: 0.3s background ease;

  padding: ${({ theme }) => `${theme.spacing.sm}px ${theme.spacing.sm * 2}px`};
  border-radius: 122px;

  :disabled {
    :hover {
    }
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${(props) => ButtonVariant(props.variant)}
`;

export const Text = styled.span`
  display: inline-block;
`;

const ButtonVariant = (variant: ButtonVariants) => {
  const table = {
    primary: css`
      background: ${({ theme }) => theme.colors.yellow600};
      color: ${(props) => props.theme.colors.grey600};

      &:hover {
        background: ${(props) => props.theme.colors.yellow500};
      }
    `,

    secondary: css`
      background: none;
      color: ${(props) => props.theme.colors.blue500};
      border: 1px solid ${(props) => props.theme.colors.blue500};

      &:hover {
        background: ${(props) => props.theme.colors.bg};
        color: ${(props) => props.theme.colors.blue500};
      }
    `,

    light: css`
      background: none;
      color: ${(props) => props.theme.colors.bg};
      border: 1px solid ${(props) => props.theme.colors.bg};

      &:hover {
        background: ${(props) => props.theme.colors.bg};
        color: ${(props) => props.theme.colors.blue500};
      }
    `,

    translucent: css`
      background: none;
      border: none;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.6;
      }
    `,
  };

  return table[variant];
};
