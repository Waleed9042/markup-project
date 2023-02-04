import PropTypes from "prop-types";

function FooterLink({ text = "", hyperLink = "" }) {
  return (
    <li key={text}>
      <a href={hyperLink}>{text}</a>
    </li>
  );
}

FooterLink.defaultProps = {
  text: "dummylinktext",
  hyperLink: "#"
};

FooterLink.propTypes = {
  text: PropTypes.string,
  hyperLink: PropTypes.string
};

export default FooterLink;
