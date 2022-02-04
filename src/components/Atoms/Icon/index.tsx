import React from "react";
import { Icon as MuiIcon } from "@material-ui/core";

export type iconProps = {
  name?: string;
  className?: string;
  onClick?: () => void;
};

const Icon = (props: iconProps) => {
  const { name, className, onClick } = props;
  return (
    <MuiIcon className={className} onClick={onClick}>
      {/* based on name we can render particular icon from material-ui? */}
      {name}
    </MuiIcon>
  );
};

export default Icon;
