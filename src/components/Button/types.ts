import { ButtonHTMLAttributes } from "react";

export type ButtonVariants = "primary" | "secondary" | "light";

export type StylesProps = {
  variant?: ButtonVariants;
};

export type ButtonProps = StylesProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: string;
  };
