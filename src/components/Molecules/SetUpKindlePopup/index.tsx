import { Grid } from "@material-ui/core";
import Dialog, { DialogProps } from "@material-ui/core/Dialog/Dialog";
import React from "react";
import Typography from "../../Atoms/Typography";

interface SetupKindlePopupProps extends DialogProps {
  button?: JSX.Element;
  buttonLabel?: string;
  heading?: string;
  onClose?: () => void;
  subHeading?: string;
  body?: string;
  input?: JSX.Element;
}

const SetUpKindlePopup = (props: SetupKindlePopupProps) => {
  const { button, buttonLabel, heading, onClose, subHeading, body, input } =
    props;
  return (
    <div>
      <Dialog maxWidth="xl" onClose={onClose} {...props}>
        <Grid container>
          <Grid item>{heading}</Grid>
          <Grid item>
            {subHeading}
            {input}
          </Grid>
          <Grid item>{body}</Grid>
          <Grid item>
            {button}
            <Typography variant="body2">{buttonLabel}</Typography>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
};

export default SetUpKindlePopup;
