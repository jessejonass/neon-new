import styled, { css } from "styled-components";
import { ButtonVariants, StylesProps } from "./types";

export const ButtonContainer = styled.button<Required<StylesProps>>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) =>
    `${theme.spacing.small}px ${theme.spacing.small * 2}px`};
  border-radius: 122px;

  :disabled {
    :hover {
    }
    cursor: not-allowed;
    opacity: 0.5;
  }

  transition: 0.3s background ease;
  ${(props) => ButtonVariant(props.variant)}
`;

export const Text = styled.span`
  display: inline-block;
`;

const ButtonVariant = (variant: ButtonVariants) => {
  const table = {
    primary: css`
      font-weight: 400;
      color: ${(props) => props.theme.colors.grey600};
      background-color: ${(props) => props.theme.colors.yellow};

      &:hover {
        background-color: ${(props) => props.theme.colors.yellowLight};
      }
    `,
    secondary: css`
      font-weight: bold;
      background-color: transparent;
      color: ${(props) => props.theme.colors.blueLight};
      border: 1px solid ${(props) => props.theme.colors.blueLight};

      &:hover {
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.blueLight};
      }
    `,

    light: css`
      font-weight: bold;
      background-color: transparent;
      color: ${(props) => props.theme.colors.white};
      border: 1px solid ${(props) => props.theme.colors.white};

      &:hover {
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.blueLight};
      }
    `,
  };

  return table[variant];
};
