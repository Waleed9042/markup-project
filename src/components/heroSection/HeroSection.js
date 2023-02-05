import React from "react";
import heroImage from "../../images/hero-image.png";
import CarouselButton from "./CarouselButton";
import CtaSection from "./CtaSection";

export default function HeroSection() {
  return (
    <div id="default-carousel" className="relative" data-carousel="static">
      <div className="relative md:h-[45rem] overflow-hidden rounded-lg">
        <div className="duration-700 ease-in-out" data-carousel-item>
          <img
            src={heroImage}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
          <CtaSection
            ctaTitle="Welcome to Beauty Spa"
            ctaDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas, lorem ut suscipit facilisis, nisi neque commodo quam, non pretium dui arcu varius neque"
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={heroImage}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src={heroImage}
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      <CarouselButton srcText="Previous" type="Previous" />
      <CarouselButton srcText="Next" type="Next" />
    </div>
  );
}
