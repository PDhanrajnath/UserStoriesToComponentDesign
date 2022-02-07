import { Grid } from "@material-ui/core";
import React from "react";

export type tabsProps = {
  labeltabs?: any;
  content?: any;
};

const secondaryTabs = (props: tabsProps) => {
  const { labeltabs, content } = props;
  return (
    <Grid container>
      <Grid container>
        {labeltabs}
        {/* also handle onChange for multiple tabs and render content accordingly */}
      </Grid>
      <Grid item>
        {/* content is dependent on tabs */}
        {content}
      </Grid>
    </Grid>
  );
};

export default secondaryTabs;
