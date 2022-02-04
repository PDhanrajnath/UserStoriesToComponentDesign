import React from "react";
import { ButtonProps } from "@material-ui/core/Button/Button";
import { Button as MuiButton } from "@material-ui/core";

export interface IButtonProps extends ButtonProps {
  name: string;
  variant?: "contained" | "text" | "outlined";
  color?: "primary" | "secondary" | "inherit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button = (props: IButtonProps) => {
  const { variant, onClick, color, className, name } = props;
  return (
    <MuiButton
      variant={variant}
      color={color}
      className={className}
      onClick={onClick}
    >
      {name}
    </MuiButton>
  );
};

export default Button;
