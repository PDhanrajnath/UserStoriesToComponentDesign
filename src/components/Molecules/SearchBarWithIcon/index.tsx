import React from "react";
import Icon from "../../Atoms/Icon";
import Textfield from "../../Atoms/Textfield";

export type SearchBarIconProps = {
  id?: string;
  placeholder?: string;
  onChange?: () => void;
  startEnd?: string;
  svg?: any;
};
const SearchBarWithIcon = (props: SearchBarIconProps) => {
  const { id, placeholder, onChange, startEnd, svg } = props;
  return (
    <div>
      {startEnd === "start" ? (
        <>
          <Icon id={id} icon={svg} />
          <Textfield id={id} placeholder={placeholder} onChange={onChange} />
        </>
      ) : (
        <>
          <Textfield id={id} placeholder={placeholder} onChange={onChange} />
          <Icon id={id} icon={svg} />
        </>
      )}
    </div>
  );
};

export default SearchBarWithIcon;
