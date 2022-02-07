import { Grid } from "@material-ui/core";
import React from "react";
import Typography from "../../Atoms/Typography";
import secondaryTabs from "../../Molecules/secondaryTabs";
import SetUpKindlePopup from "../../Molecules/SetUpKindlePopup";

export type BookDetailsProps = {
  Button?: JSX.Element;
  ButtonIcon?: JSX.Element;
  IconTypography?: JSX.Element;
};

const BookDetails = (props: BookDetailsProps) => {
  const { Button, ButtonIcon, IconTypography } = props;
  const handleReadnow = () => {};
  const handleBuyBook = () => {};
  const handleSendToKindle = () => {
    <SetUpKindlePopup open={true} />;
  };
  const handleTabsUnderBookDetail = () => {};

  return (
    <div>
      <Grid container>
        <Grid item>
          {/* Body typography */}
          <Typography variant="h2">The Grid</Typography>
          <Typography>summary line for this book</Typography>
        </Grid>
        <Grid item>
          {/* Add Icons 15-min read & authio available */}
          {IconTypography}
          {ButtonIcon}
        </Grid>
        <Grid item>
          {/* Buttons to handle readnow buybook send to kindle */}
          {/* Handle onClicks on every button */}
          {Button}
          {/* Handle popup molecule for sen to Kindle button */}
        </Grid>
        {/* inner tabs i.e., synopsis, who is it for, about the author  */}
        <Grid item>{secondaryTabs}</Grid>
        <Grid>{/* Book image */}</Grid>
      </Grid>
    </div>
  );
};

export default BookDetails;
