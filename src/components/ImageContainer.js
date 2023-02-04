import PropTypes from "prop-types";

function ImageContainer({
  imageUrl1 = "",
  imageUrl2 = "",
  imageUrl1_alt = "",
  imageUrl1_id = "",
}) {
  return (
    <div className="image-constrain js-image-wrap">
      <div className="image-container image__pic js-image-pic">
        <img
          className="no-click screenshot-image"
          src={imageUrl1}
          crossorigin="anonymous"
          alt={imageUrl1_alt}
          id={imageUrl1_id}
          image-id="29mndlg"
        />
        <div className="under-image">
          <img src={imageUrl2} />
        </div>
      </div>
    </div>
  );
}

ImageContainer.defaultProps = {
  imageUrl1:
    "https://img001.prntscr.com/file/img001/7tp6IIKDTNmn-_GrrrObgw.png",
  imageUrl2: "https://prnt.sc/ND4cHrbyG7GN",
  imageUrl1_alt: "Lightshot screenshot",
  imageUrl1_id: "screenshot-image",
};

ImageContainer.propTypes = {
  imageUrl1: PropTypes.string,
  imageUrl2: PropTypes.string,
  imageUrl1_alt: PropTypes.string,
  imageUrl1_id: PropTypes.string,
};

export default ImageContainer;
