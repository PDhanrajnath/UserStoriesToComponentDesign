import { Card, CardContent, CardHeader } from "@material-ui/core";
import React from "react";
import Typography from "../../Atoms/Typography";

export type bookCardProps = {
  img?: string;
  name?: string;
  body?: string;

};

const BookCard = (props: bookCardProps) => {
  const { img, name, body } = props;
  return (
    <Card elevation={0}>
      <CardHeader avatar={<img src={img} alt={name} />} />
      <CardContent>
        <Typography children={name} variant="body1" />
        <Typography children={body} variant="inherit" />
        {/* clock icon */}
      </CardContent>
    </Card>
  );
};

export default BookCard;
