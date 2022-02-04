import { Grid } from "@material-ui/core";
import React from "react";
import Icon from "../../Atoms/Icon";

export type HeaderProps = {
  icon?: JSX.Element;
  ButtonIcon?: JSX.Element;
  Button?: JSX.Element;
  search?: JSX.Element;
};

const Header = (props: HeaderProps) => {
  const { icon, Button, ButtonIcon, search } = props;
  return (
    <div>
      <Grid container>
        <Grid item>
          {/* add buttons  */}
          {icon}
          {search}
          {ButtonIcon}
          {Button}
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
