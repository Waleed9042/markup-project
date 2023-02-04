import Language from "./language/LanguageList";
import Logo from "./Logo";
import languageData from "../../dummy/languageData";
import SignInLink from "./SignInLink";
import UserOptions from "./user-options/UserOptions";
import DownloadButton from "./DownloadButton";
import SocialOptions from "./social-options/SocialOptions";

function Header() {
  return (
    <div className="header">
      <div className="page-constrain">
        <Logo
          title1="Lightshot"
          title2="screen capture tool"
          hyperLink="https://prnt.sc/"
        />
        <Language selectedLanguage="English" languageData={languageData} />
        <SignInLink
          signInLink="https://prntscr.com/gallery.html"
          target="_self"
          text="Sign in"
          id="signin"
        />
        <UserOptions userName="username" />
        <DownloadButton btnText="Download Lightshot for free" />
        <SocialOptions />
      </div>
    </div>
  );
}

export default Header;
