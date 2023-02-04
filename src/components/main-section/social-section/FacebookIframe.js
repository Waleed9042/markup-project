import PropTypes from "prop-types";

function FacebookIframe({
  name,
  width,
  height,
  dataTestid,
  title,
  frameborder,
  allowtransparency,
  allowfullscreen,
  scrolling,
  allow,
  src,
}) {
  return (
    <div className="social__fb">
      <div
        class="fb-like fb_iframe_widget"
        data-width="100"
        data-layout="button_count"
        data-action="like"
        data-size="small"
        data-show-faces="false"
        data-share="false"
        fb-xfbml-state="rendered"
        fb-iframe-plugin-query="action=like&amp;app_id=154822244543652&amp;container_width=1409&amp;href=https%3A%2F%2Fprnt.sc%2FND4cHrbyG7GN&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=false&amp;show_faces=false&amp;size=small&amp;width=100"
      >
        <span
          style={{ verticalAlign: "bottom", width: "90px", height: "28px" }}
        >
          <iframe
            name={name}
            width={width}
            height={height}
            data-testid={dataTestid}
            title={title}
            frameborder={frameborder}
            allowtransparency={allowtransparency}
            allowfullscreen={allowfullscreen}
            scrolling={scrolling}
            allow={allow}
            src={src}
            style={{
              border: "none",
              visibility: "visible",
              width: "90px",
              height: "28px",
            }}
          ></iframe>
        </span>
      </div>
    </div>
  );
}

FacebookIframe.defaultProps = {
  name: "f1265c2a80c23c",
  width: "100px",
  height: "1000px",
  dataTestid: "fb:like Facebook Social Plugin",
  title: "fb:like Facebook Social Plugin",
  frameborder: "0",
  allowtransparency: "true",
  allowfullscreen: "true",
  scrolling: "no",
  allow: "encrypted-media",
  src: "https://www.facebook.com/plugins/like.php?action=like&amp;app_id=154822244543652&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df1d2ba090f58fd%26domain%3Dprnt.sc%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fprnt.sc%252Ffe191d38950f8c%26relation%3Dparent.parent&amp;container_width=1409&amp;href=https%3A%2F%2Fprnt.sc%2FND4cHrbyG7GN&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=false&amp;show_faces=false&amp;size=small&amp;width=100",
};

FacebookIframe.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  dataTestid: PropTypes.string,
  title: PropTypes.string,
  frameborder: PropTypes.string,
  allowtransparency: PropTypes.string,
  allowfullscreen: PropTypes.string,
  scrolling: PropTypes.string,
  allow: PropTypes.string,
  src: PropTypes.string,
};

export default FacebookIframe;
