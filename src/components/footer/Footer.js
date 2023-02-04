import footerData from "../../dummy/footerData";
import FooterImageLink from "./FooterImageLink";
import FooterLinks from "./footer-nav-links/FooterLinks";
import MailTo from "./MailTo";

function Footer() {
  return (
    <div class="footer">
      <div class="page-constrain">
        <FooterImageLink
          hyperLink="./"
          src="//st.prntscr.com/2022/09/11/1722/img/footer-logo.png"
          alt="dummy value"
        />
        <ul class="footer-nav">
          <FooterLinks footerLinks={footerData} />
        </ul>
        <div class="footer-copy">
          <MailTo
            mailLink="mailto:support@skillbrains.com"
            title="Skillbrains"
            tradeMark="© 2009-2022"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
