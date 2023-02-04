import PropTypes from "prop-types";

function SignInLink({ signInLink = "", target = "", text = "", id = "" }) {
  return (
    <div id={id}>
      <a href={signInLink} target={target}>
        {text}
      </a>
    </div>
  );
}

SignInLink.defaultProps = {
  signInLink: "https://prntscr.com/gallery.html",
  target: "_self",
  text: "Sign in",
  id: "signin",
};

SignInLink.propTypes = {
  signInLink: PropTypes.string,
  target: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
};

export default SignInLink;
