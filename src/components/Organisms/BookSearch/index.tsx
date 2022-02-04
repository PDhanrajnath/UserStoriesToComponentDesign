import { Grid } from "@material-ui/core";
import React from "react";
import Textfield from "../../Atoms/Textfield";

export type BookSearchProps = {
  bookLists?: JSX.Element;
  Search?: JSX.Element;
};

const BookSearch = (props: BookSearchProps) => {
  const { bookLists, Search } = props;
  const onChangeSearchInput = () => {};

  return (
    <div>
      {/* Implement search for searching books */}
      <Grid container>
        <Grid item>
          {Search}
          {/* BookList molecule which will render by search functionality */}
          {bookLists}
        </Grid>
      </Grid>
    </div>
  );
};

export default BookSearch;
