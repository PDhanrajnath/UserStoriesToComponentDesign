import React from "react";
import { ButtonProps } from "@material-ui/core/Button/Button";
import { Button as MuiButton } from "@material-ui/core";

export interface IButtonIconProps extends ButtonProps {
  name: string;
  variant?: "contained" | "text" | "outlined";
  color?: "primary" | "secondary" | "inherit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

const ButtonWithIcon = (props: IButtonIconProps) => {
  const { variant, onClick, color, className, name, startIcon, endIcon } =
    props;

  return (
    <MuiButton
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      className={className}
      onClick={onClick}
    >
      {/* based on name we can render particular icon from material-ui? */}
      {name}
    </MuiButton>
  );
};

export default ButtonWithIcon;
