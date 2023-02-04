import PropTypes from "prop-types";

function InfoLink({ hyperLink = "", id = "", className = "", text = "" }) {
  return (
    <span className="image-info-item">
      <a href={hyperLink} id={id}>
        <i class={className}></i>
        <strong>{text}</strong>
      </a>
    </span>
  );
}

InfoLink.defaultProps = {
  hyperLink: "#",
  class: "icon_abuse",
  text: "report abuse",
  id: "report abuse",
};

InfoLink.propTypes = {
  hyperLink: PropTypes.string,
  class: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
};

export default InfoLink;
