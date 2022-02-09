import { ReactNode } from "react";

export type TitleVariants = "sm" | "md" | "lg" | "xl" | "xxl";

export type TitleProps = {
  variant: TitleVariants;
  children: string | ReactNode;
  opacity?: number;
  maxWidth?: string;
};
