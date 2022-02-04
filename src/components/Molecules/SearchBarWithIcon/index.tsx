import { Icon } from "@material-ui/core";
import React from "react";
import Textfield from "../../Atoms/Textfield";

export type SearchBarIconProps = {
  id?: string;
  placeholder?: string;
  onChange?: () => void;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
};
const SearchBarWithIcon = (props: SearchBarIconProps) => {
  const { id, placeholder, onChange, startIcon, endIcon } = props;
  return (
    <div>
      <Textfield id={id} placeholder={placeholder} onChange={onChange} />
      <Icon id={id}> {startIcon} </Icon>
      <Icon id={id}> {endIcon} </Icon>
    </div>
  );
};

export default SearchBarWithIcon;
