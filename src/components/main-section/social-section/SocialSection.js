import FacebookIframe from "./FacebookIframe";
import TwitterIframe from "./TwitterIframe";

function SocialSection() {
  return (
    <div className="social">
      <TwitterIframe
        scrolling="no"
        frameborder="0"
        width="100px"
        height="1000px"
        allowtransparency="true"
        allowfullscreen="true"
        title="Twitter Tweet Button"
        src="https://platform.twitter.com/widgets/tweet_button.2b2d73daf636805223fb11d48f3e94f7.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;original_referer=https%3A%2F%2Fprnt.sc%2FND4cHrbyG7GN&amp;size=m&amp;text=Screenshot%20by%20Lightshot&amp;time=1675450551892&amp;type=share&amp;url=https%3A%2F%2Fprnt.sc%2FND4cHrbyG7GN&amp;via=light_shot"
      />
      <FacebookIframe
        name="f1265c2a80c23c"
        width="100px"
        height="1000px"
        dataTestid="fb:like Facebook Social Plugin"
        title="fb:like Facebook Social Plugin"
        frameborder="0"
        allowtransparency="true"
        allowfullscreen="true"
        scrolling="no"
        allow="encrypted-media"
        src="https://www.facebook.com/plugins/like.php?action=like&amp;app_id=154822244543652&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1d2ba090f58fd%26domain%3Dprnt.sc%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fprnt.sc%252Ffe191d38950f8c%26relation%3Dparent.parent&amp;container_width=1409&amp;href=https%3A%2F%2Fprnt.sc%2FND4cHrbyG7GN&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=false&amp;show_faces=false&amp;size=small&amp;width=100"
      />
    </div>
  );
}

export default SocialSection;
