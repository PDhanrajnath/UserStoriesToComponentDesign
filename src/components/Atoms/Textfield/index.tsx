import React from "react";
import { TextField as MuiTxtField } from "@material-ui/core";

export interface IInputFieldProps {
  id?: string;
  variant?: "filled" | "standard" | "outlined";
  placeholder?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const Textfield = (props: IInputFieldProps) => {
  const { variant, placeholder, className, onChange, id } = props;
  return (
    <MuiTxtField
      id={id}
      placeholder={placeholder}
      className={className}
      variant={variant}
      onChange={onChange}
    ></MuiTxtField>
  );
};

export default Textfield;
