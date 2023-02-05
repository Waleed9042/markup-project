import React from 'react'
import Image1 from "../../images/image-1.png";
import Image2 from "../../images/image-2.png";
import Image3 from "../../images/image-3.png";

export default function ImageSection() {
  return (
    <>
      <div className="right-2/4 left-1/4  z-10 absolute w-72 h-56">
        <img src={Image1} alt="girl-1" />
      </div>
      <div className="relative w-3/5 h-3/5 -z-10 left-16 top-24">
        <img src={Image2} alt="girl-2" />
      </div>
      <div className="w-72 h-56 z-10">
        <img src={Image3} alt="girl-3" />
      </div>
    </>
  );
}
