import React from "react";

export type cardImageProps = {
  name?: string;
  className?: string;
  imgSrc?: string;
  id?: string;
};

const CardImage = (props: cardImageProps) => {
  const { name, className, imgSrc, id } = props;
  return (
    <div>
      <img src={imgSrc} className={className} id={id} alt={name} />
    </div>
  );
};

export default CardImage;
