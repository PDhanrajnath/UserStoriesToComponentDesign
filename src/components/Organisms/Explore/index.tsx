import { Grid } from "@material-ui/core";
import React from "react";

export type ExploreProps = {
  Button?: JSX.Element;
  ButtonIcon?: JSX.Element;
  SearchIcon?: JSX.Element;
};

const Explore = (props: ExploreProps) => {
  const { Button, ButtonIcon, SearchIcon } = props;
  return (
    <div>
      <Grid container>
        <Grid item>
          {Button}
          {SearchIcon}
        </Grid>
        <Grid item>
          {/* add ButtonIcons in grid items */}
          {ButtonIcon}
        </Grid>
      </Grid>
    </div>
  );
};

export default Explore;
