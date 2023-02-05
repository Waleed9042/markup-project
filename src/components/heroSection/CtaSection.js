import React from "react";
import PropTypes from "prop-types";
import BookNowButton from "../header/bookNow/BookNowButton";

const CtaSection = ({ ctaTitle = "", ctaDescription = "" }) => {
  return (
    <div className="absolute">
      <div className="pl-24 pt-64">
        <div className="text-[#ffffff] font-serif font-normal text-4xl leading-10 tracking-wide">
          {ctaTitle}
        </div>
        <div className="w-80 h-24 pt-2">
          <div className="text-[#ffffff] w-full font-serif font-normal text-base">
            {ctaDescription}
          </div>
        </div>
        <div className="pt-6">
          <BookNowButton
            btnText="Book Now"
            borderColor="FFFFFF"
            textColor="FFFFFF"
          />
        </div>
      </div>
    </div>
  );
};

CtaSection.defaultProps = {
  ctaTitle: " Welcome to Beauty Spa",
  ctaDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas, lorem ut suscipit facilisis, nisi neque commodo quam, non pretium dui arcu varius neque",
};

CtaSection.propTypes = {
  type: PropTypes.string,
  srcText: PropTypes.string,
};

export default CtaSection;
