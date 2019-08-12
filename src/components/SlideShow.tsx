import React, { FunctionComponent } from "react";
import Image from "./Image";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
// const importAll = (r: any): any => {
//   return r.keys().map(r);
// };

// const images = importAll(
//   require.context("../assets/images", false, /\.(png|jpe?g|JPG|svg)$/)
// );
const images = [img1, img2, img3, img4, img5, img6];
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
