import React, { FunctionComponent } from "react";
import { IImageProps } from "../Interfaces/UserInterface";

const Image: FunctionComponent<IImageProps> = ({ ImageUrl }) => {
  return (
    <div>
      <img src={ImageUrl} alt="slide show images" />
    </div>
  );
};

export { Image as default };
