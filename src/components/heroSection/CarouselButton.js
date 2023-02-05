import React from "react";
import PropTypes from "prop-types";

const CarouselButton = ({ type = "", srcText = "" }) => {
  const dimensions = type === "Previous" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7";
  return (
    <button
      type="button"
      className={`absolute ${type === "Previous" ? "left-0" : "right-0"} top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none`}
    >
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white dark:bg-white-800/30 group-hover:bg-dark/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d={dimensions}
          ></path>
        </svg>
        <span className="sr-only">{srcText}</span>
      </span>
    </button>
  );
};

CarouselButton.defaultProps = {
  type: "Previous",
  srcText: "Previous",
};

CarouselButton.propTypes = {
  type: PropTypes.string,
  srcText: PropTypes.string,
};

export default CarouselButton;
