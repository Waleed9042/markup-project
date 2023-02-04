import PropTypes from "prop-types";

function MainLink({ hyperLink = "", text = "" }) {
  return (
    <div className="image__title image-info-item">
      <a href={hyperLink}>{text}</a>
    </div>
  );
}

MainLink.defaultProps = {
  hyperLink: "//app.prntscr.com/",
  text: "Captured with Lightshot",
};

MainLink.propTypes = {
  hyperLink: PropTypes.string,
  text: PropTypes.string,
};

export default MainLink;
