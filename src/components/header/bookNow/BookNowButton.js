import React from "react";
import PropTypes from "prop-types";

const BookNowButton = ({ btnText = "", borderColor = "", textColor = "" }) => {
  return (
    <div
      className={`pt-1 w-36 h-10 border border-[#${borderColor}] text-center border-2 text-[#${textColor}]`}
    >
      {btnText}
    </div>
  );
};

BookNowButton.defaultProps = {
  btnText: "Book Now",
  borderColor: "FCC761",
  textColor: "FCC761",
};

BookNowButton.propTypes = {
  btnText: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default BookNowButton;
