import React, { FunctionComponent } from "react";
import Image from "./Image";
import { Carousel } from "react-responsive-carousel";
const importAll = (r: any): any => {
  return r.keys().map(r);
};

const images = importAll(
  require.context("../assets/images", false, /\.(png|jpe?g|JPG|svg)$/)
);

const ImageSlider: FunctionComponent<{}> = () => {
  return (
    <div id="home">
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        transitionTime={1000}
        showThumbs={false}
        className="Carousel"
      >
        {images.map((image: string) => {
          return <Image key={image} ImageUrl={image} />;
        })}
      </Carousel>
    </div>
  );
};

export { ImageSlider as default };
