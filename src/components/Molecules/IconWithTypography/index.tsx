import React from "react";
import Icon from "../../Atoms/Icon";
import Typography from "../../Atoms/Typography";

export type iconTypographyProps = {
  name?: string;
  className?: string;
  id?: string;
};
const IconWithTypography = (props: iconTypographyProps) => {
  const { name, className, id } = props;
  return (
    <div>
      <Icon name={name} className={className} />
      <Typography className={className} children={name} id={id} />
    </div>
  );
};

export default IconWithTypography;
