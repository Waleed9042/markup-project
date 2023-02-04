import PropTypes from "prop-types";

function MailTo({ mailLink = "", title = "", tradeMark = "" }) {
  return (
    <span>
      <a href={mailLink}>{title}</a> {tradeMark}
    </span>
  );
}

MailTo.defaultProps = {
  mailLink: "mailto:support@skillbrains.com",
  title: "Skillbrains",
  tradeMark: "© 2009-2022",
};

MailTo.propTypes = {
  mailLink: PropTypes.string,
  title: PropTypes.string,
  tradeMark: PropTypes.string,
};

export default MailTo;
