import React from "react";
import { Icon as MuiIcon } from "@material-ui/core";

export type iconProps = {
  icon?: any;
  className?: string;
  onClick?: () => void;
  id?: string;
};

const Icon = (props: iconProps) => {
  const { icon, className, onClick } = props;
  return <MuiIcon className={className} children={icon} onClick={onClick} />;
};

export default Icon;
