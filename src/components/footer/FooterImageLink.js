import PropTypes from "prop-types";

function FooterImageLink({hyperLink="", src="", alt=""}) {
  return (
    <a href={hyperLink}>
      <img
        src={src}
        alt={alt}
        className="footer-logo"
      />
    </a>
  );
}

FooterImageLink.defaultProps = {
  hyperLink: "./",
  src: "//st.prntscr.com/2022/09/11/1722/img/footer-logo.png",
  alt: "dummy value"
};

FooterImageLink.propTypes = {
    hyperLink: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string
};

export default FooterImageLink;
