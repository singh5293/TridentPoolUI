import React, { FunctionComponent } from "react";
import { IImageProps } from "../Interfaces/UserInterface";

const Image: FunctionComponent<IImageProps> = ({ ImageUrl }) => {
  return (
    <div style={{ height: "100%" }}>
      <img
        src={ImageUrl}
        alt="slide show images"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </div>
  );
};

export { Image as default };
