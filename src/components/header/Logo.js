import PropTypes from "prop-types";

function Logo({ title1 = "", title2 = "", hyperLink = "" }) {
  return (
    <a href={hyperLink} target="_blank" rel="noreferrer" className="header-logo">
      <h1>{title1}</h1>
      <h2>{title2}</h2>
    </a>
  );
}

Logo.defaultProps = {
  title1: "Lightshot",
  title2: "screen capture tool",
  hyperLink: "https://prnt.sc/",
};

Logo.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  hyperLink: PropTypes.string
};

export default Logo;
