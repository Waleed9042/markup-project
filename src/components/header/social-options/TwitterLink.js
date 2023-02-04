import PropTypes from "prop-types";

function TwitterLink({ hyperLink = "" }) {
  return (
    <a href={hyperLink}>
      <i className="icon-twitter_gscale"></i>
    </a>
  );
}

TwitterLink.defaultProps = {
  hyperLink: "https://twitter.com/Light_shot",
};

TwitterLink.propTypes = {
  hyperLink: PropTypes.string,
};

export default TwitterLink;
