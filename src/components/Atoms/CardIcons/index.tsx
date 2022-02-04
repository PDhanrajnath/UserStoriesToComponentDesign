import React from "react";
import IconButton from "@material-ui/core/IconButton";

export type cardIconProps = {
  name?: string;
  className?: string;
  onClick?: (event: any) => void;
  id?: string;
};

const CardIcons = (props: cardIconProps) => {
  const { name, className, onClick, id } = props;
  return (
    <IconButton id={id} onClick={onClick} className={className}>
      {/* based on name we can render particular icon from material-ui? */}
      {name}
    </IconButton>
  );
};

export default CardIcons;
