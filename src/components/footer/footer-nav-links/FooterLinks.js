import PropTypes from "prop-types";
import FooterLink from "./FooterLink";

function FooterLinks({ footerLinks = [] }) {
  const links =
    footerLinks &&
    footerLinks.map((link) => {
      return <FooterLink text={link.text} hyperLink={link.hyperLink} />;
    });
  return links;
}

FooterLinks.defaultProps = {
  footerLinks: [],
};

FooterLinks.propTypes = {
  footerLinks: PropTypes.array,
};

export default FooterLinks;
