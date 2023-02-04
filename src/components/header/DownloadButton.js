import PropTypes from "prop-types";

function DownloadButton({ btnText="" }) {
  return (
    <div className="header-downloads js-download-last-home">
      <span className="button_blue_download header-downloads__button js-download-last-trigger">
        <div className="button__wrap download-open-download-page-goal">
          {btnText}
        </div>
      </span>
    </div>
  );
}

DownloadButton.defaultProps = {
  btnText: "Download Lightshot for free",
};

DownloadButton.propTypes = {
  btnText : PropTypes.string
};

export default DownloadButton;
