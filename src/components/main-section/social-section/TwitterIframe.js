import PropTypes from "prop-types";

function TwitterIframe({
  scrolling = "",
  frameborder = "",
  allowtransparency = "",
  allowfullscreen = "",
  title = "",
  src = "",
  width = "",
  height = "",
}) {
  return (
    <div className="social__tw">
      <iframe
        id="twitter-widget-0"
        width={width}
        height={height}
        scrolling={scrolling}
        frameborder={frameborder}
        allowtransparency={allowtransparency}
        allowfullscreen={allowfullscreen}
        className="twitter-share-button twitter-share-button-rendered twitter-tweet-button"
        style={{
          position: "static",
          visibility: "visible",
          width: "73px",
          height: "20px",
        }}
        title={title}
        src={src}
      />
    </div>
  );
}

TwitterIframe.defaultProps = {
  width: "100px",
  height: "1000px",
  scrolling: "no",
  frameborder: "0",
  allowtransparency: "true",
  allowfullscreen: "true",
  title: "Twitter Tweet Button",
  src: "https://platform.twitter.com/widgets/tweet_button.2b2d73daf636805223fb11d48f3e94f7.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;original_referer=https%3A%2F%2Fprnt.sc%2FND4cHrbyG7GN&amp;size=m&amp;text=Screenshot%20by%20Lightshot&amp;time=1675450551892&amp;type=share&amp;url=https%3A%2F%2Fprnt.sc%2FND4cHrbyG7GN&amp;via=light_shot",
};

TwitterIframe.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  scrolling: PropTypes.string,
  frameborder: PropTypes.string,
  allowfullscreen: PropTypes.string,
  allowtransparency: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string,
};

export default TwitterIframe;
