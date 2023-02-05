import React from "react";
import PropTypes from "prop-types";
import BookNowButton from "../header/bookNow/BookNowButton";

const AboutCta = ({
  mainTitle = "",
  subDescription = "",
  description = "",
}) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-[#000000] font-serif font-normal text-4xl leading-10 tracking-wide">
        {mainTitle}
      </div>
      <div className="pt-4 w-2/3 text-[#000000] font-serif font-normal text-lg tracking-wide">
        {subDescription}
      </div>
      <div className="pt-2 mt-2 border-x-4 border-[#FCC761] border-r-0 w-96">
        <div className="pl-6 text-[#A0A0A0] font-sans">{description}</div>
      </div>
      <div className="pt-6">
        <BookNowButton
          btnText="Book Now"
          borderColor="FCC761"
          textColor="FCC761"
        />
      </div>
    </div>
  );
};

AboutCta.defaultProps = {
  mainTitle: "About Us",
  subDescription:
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas, lorem ut suscipit facilisis, nisi neque",
  description:
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas, lorem ut suscipit facilisis, nisi neque commodo quam, non pretium dui arcu varius neque. Proin nec tortor a velit varius luctus sed ut mauris. Nulla eget ornare nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean blandit erat magna, sit amet accumsan nisl condimentum ac.",
};

AboutCta.propTypes = {
  mainTitle: PropTypes.string,
  subDescription: PropTypes.string,
  description: PropTypes.string,
};

export default AboutCta;
