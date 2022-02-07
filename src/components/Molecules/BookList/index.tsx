import { Card, CardContent, CardHeader, Grid, Icon } from "@material-ui/core";
import React from "react";
import Typography from "../../Atoms/Typography";

export type bookListProps = {
  img?: string;
  name?: string;
  body?: string;
  icon?: JSX.Element;
  number?: number;
};

const BookList = (props: bookListProps) => {
  const { img, name, body, icon, number } = props;
  return (
    <Grid container>
      <Grid item>
        <img src={img} alt={name} />
      </Grid>
      <Grid item>
        <Typography children={name} variant="body1" />
      </Grid>
      <Grid item>
        <Typography children={body} variant="inherit" />
      </Grid>
      <Grid item>
        <Typography children={number} variant="caption" />
        <Icon children={icon} />
      </Grid>
    </Grid>
  );
};

export default BookList;
