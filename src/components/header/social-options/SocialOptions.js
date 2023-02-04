import FacebookLink from "./FacebookLink";
import TwitterLink from "./TwitterLink";

function SocialOptions() {
  return (
    <div className="header-social">
      <TwitterLink hyperLink="https://twitter.com/Light_shot" />
      <FacebookLink hyperLink="http://www.facebook.com/Lighshot" />
    </div>
  );
}

export default SocialOptions;
