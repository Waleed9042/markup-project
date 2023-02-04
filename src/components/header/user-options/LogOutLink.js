import PropTypes from "prop-types";

function LogOutLink({ id = "", hyperLink = "", text = "" }) {
  return (
    <a id={id} href={hyperLink}>
      <i className="icon-logout"></i>{text}
    </a>
  );
}

LogOutLink.defaultProps = {
  id: "logout_btn",
  hyperLink: "#",
  text: "Log out",
};

LogOutLink.propTypes = {
  id: PropTypes.string,
  hyperLink: PropTypes.string,
  text: PropTypes.string,
};

export default LogOutLink;
