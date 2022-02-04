import { Card, CardContent, CardHeader, Icon } from "@material-ui/core";
import React from "react";
import CardIcons from "../../Atoms/CardIcons";
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
    <Card elevation={0}>
      <CardHeader avatar={<img src={img} alt={name} />} />
      <CardContent>
        <Typography children={name} variant="body1" />
        <Typography children={body} variant="inherit" />
        <CardIcons id={name} name={name} />
        <Typography children={number} variant="caption" />
        <Icon children={icon} />
      </CardContent>
    </Card>
  );
};

export default BookList;
