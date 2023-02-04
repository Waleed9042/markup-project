import PropTypes from "prop-types";

function GalleryLink({ id = "", hyperLink = "", target = "", text = "" }) {
  return (
    <a id={id} href={hyperLink} target={target}>
      <i className="icon-gallery"></i>
      {text}
    </a>
  );
}

GalleryLink.defaultProps = {
  id: "mygallery_btn",
  hyperLink: "https://prntscr.com/gallery.html",
  target: "_self",
  text: "My Gallery",
};

GalleryLink.propTypes = {
  id: PropTypes.string,
  hyperLink: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string,
};

export default GalleryLink;
