import PropTypes from "prop-types";

function FacebookLink({ hyperLink = "" }) {
  return (
    <a href={hyperLink}>
      <i className="icon-facebook_gscale"></i>
    </a>
  );
}

FacebookLink.defaultProps = {
  hyperLink: "http://www.facebook.com/Lighshot",
};

FacebookLink.propTypes = {
  hyperLink: PropTypes.string,
};

export default FacebookLink;
