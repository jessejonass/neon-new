export type TitleVariants = "sm" | "md" | "lg" | "xl" | "xxl";

export type TitleProps = {
  variant: TitleVariants;
  children: string | JSX.Element;
  opacity?: number;
  maxWidth?: string;
};
