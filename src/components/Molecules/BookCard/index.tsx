import { Card, CardContent, CardHeader } from "@material-ui/core";
import React from "react";
import CardIcons from "../../Atoms/CardIcons";
import Icon from "../../Atoms/Icon";
import Typography from "../../Atoms/Typography";

export type bookCardProps = {
  img?: string;
  name?: string;
  body?: string;
  icon?: string;
};

const BookCard = (props: bookCardProps) => {
  const { img, name, body, icon } = props;
  return (
    <Card elevation={0}>
      <CardHeader avatar={<img src={img} alt={name} />} />
      <CardContent>
        <Typography children={name} variant="body1" />
        <Typography children={body} variant="inherit" />
        <CardIcons id={name} name={name} />
        <Icon name={icon} />
      </CardContent>
    </Card>
  );
};

export default BookCard;
