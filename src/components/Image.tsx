import React, { FunctionComponent } from "react";
import { IImageProps } from "../Interfaces/UserInterface";

const Image: FunctionComponent<IImageProps> = ({ ImageUrl }) => {
  return (
    <div>
      <img
        src={ImageUrl}
        alt="slide show images"
        style={{ height: "80%", marginBottom: "30px" }}
      />
    </div>
  );
};

export { Image as default };
