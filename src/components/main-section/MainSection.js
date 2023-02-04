import Additional from "./additional/Additional";
import InfoSection from "./info-section/InfoSection";
import MainLink from "./MainLink";
import SocialSection from "./social-section/SocialSection";

function MainSection() {
  return (
    <div className="page-constrain">
      <MainLink hyperLink="//app.prntscr.com/" text="Captured with Lightshot" />
      <InfoSection />
      <SocialSection />
      <Additional />
    </div>
  );
}

export default MainSection;
