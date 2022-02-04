import React from "react";
import {
  Typography as MuiTypography,
  TypographyProps,
} from "@material-ui/core";

const Typography = (props: TypographyProps) => {
  const { variant, noWrap, align, children, className } = props;
  return (
    <MuiTypography
      variant={variant}
      noWrap={noWrap}
      align={align}
      className={className}
    >
      {children}
    </MuiTypography>
  );
};

export default Typography;
