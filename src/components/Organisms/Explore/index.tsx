import { Grid } from "@material-ui/core";
import React from "react";
import secondaryTabs from "../../Molecules/secondaryTabs";

export type ExploreProps = {
  Button?: JSX.Element;
  ButtonIcon?: JSX.Element;
  SearchIcon?: JSX.Element;
};

const Explore: React.FC<ExploreProps> = ({
  Button,
  ButtonIcon,
  SearchIcon,
}) => {
  // const Explore = (props: ExploreProps) => {
  // const { Button, ButtonIcon, SearchIcon } = props;
  return (
    <div>
      <Grid container>
        {/* inner tabs i.e., explore by category , see rencently added , ...  */}
        <Grid item>{secondaryTabs}</Grid>
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
