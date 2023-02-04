import InfoLink from "./InfoLink";

function InfoSection() {
  return (
    <div class="image-info">
      <InfoLink
        hyperLink="http://www.google.com/searchbyimage?image_url=https://img001.prntscr.com/file/img001/7tp6IIKDTNmn-_GrrrObgw.png"
        className="icon-camera"
        text="find similar"
      />
      <span class="image-info-item">&nbsp;</span>
      <InfoLink
        hyperLink="#"
        id="report-abuse"
        className="icon-abuse"
        text="report abuse"
      />
    </div>
  );
}

export default InfoSection;
