import { FC } from "react";
import { ButtonContainer, Text } from "./styles";
import { ButtonProps } from "./types";

const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
  disabled,
  ...props
}) => {
  return (
    <ButtonContainer variant={variant} disabled={disabled} {...props}>
      <Text>{children}</Text>
    </ButtonContainer>
  );
};

export default Button;
