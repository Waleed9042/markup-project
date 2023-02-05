import React from "react";
import PropTypes from "prop-types";

const NavLink = ({ hyperLink = "", className = "", text = "" }) => {
  return (
    <li className="p-3">
      <a href={hyperLink} className={className}>
        {text}
      </a>
    </li>
  );
};

NavLink.defaultProps = {
  hyperLink: "./",
  className: "",
  text: "About Us",
};

NavLink.propTypes = {
  hyperLink: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
};

export default NavLink;
