import React from "react";
import AboutCta from "./AboutCta";
import ImageSection from "./ImageSection";

export default function AboutSection() {
  return (
    <div className="flex items-stretch md:h-[45rem] m-auto">
      <div className="self-stretch basis-1/2 items-center text-center">
        <ImageSection />
      </div>
      <div className="flex basis-1/2 flex-start">
        <AboutCta
          mainTitle="About Us"
          subDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas, lorem ut suscipit facilisis, nisi neque"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas, lorem ut suscipit facilisis, nisi neque commodo quam, non pretium dui arcu varius neque. Proin nec tortor a velit varius luctus sed ut mauris. Nulla eget ornare nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean blandit erat magna, sit amet accumsan nisl condimentum ac."
        />
      </div>
    </div>
  );
}
