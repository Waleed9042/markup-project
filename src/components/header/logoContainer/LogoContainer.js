import React from "react";
import PropTypes from "prop-types";

const LogoContainer = ({imgSrc="", alternateText="", title="", colorHash=""}) => {
  return (
    <div className="flex items-center text-center justify-center">
      <img src={imgSrc} alt={alternateText} />
      <span className={`p-2 text-[${colorHash}]`}>{title}</span>
    </div>
  );
}

LogoContainer.defaultProps = {
  imgSrc: "",
  alternateText: "Logo",
  title: "Skinspa",
  colorHash: "#FCC761",
};

LogoContainer.propTypes = {
  imgSrc: PropTypes.string,
  alternateText: PropTypes.string,
  title: PropTypes.string,
  colorHash: PropTypes.string
};

export default LogoContainer;