import React from "react";
import Textfield from "../../Atoms/Textfield";

export type SearchBarProps = {
  id?: string;
  placeholder?: string;
  onChange: () => void;
};

const SearchBar = (props: SearchBarProps) => {
  const { id, placeholder, onChange } = props;
  return (
    <div>
      <Textfield id={id} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default SearchBar;
