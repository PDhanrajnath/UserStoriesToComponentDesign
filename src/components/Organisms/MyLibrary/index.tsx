import { Grid } from "@material-ui/core";
import React from "react";

export type MyLibraryProps = {
  bookCards?: JSX.Element;
};
const MyLibrary = (props: MyLibraryProps) => {
  const { bookCards } = props;
  return (
    <div>
      <Grid container>
        <Grid item>
          {/* Render book cards here. */}
          {bookCards}
        </Grid>
      </Grid>
    </div>
  );
};

export default MyLibrary;
