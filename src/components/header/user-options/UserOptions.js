import PropTypes from "prop-types";
import GalleryLink from "./GalleryLink";
import LogOutLink from "./LogOutLink";

function UserOptions({ userName = "" }) {
  return (
    <div className="header-auth js-auth-trigger">
      <div className="header-auth__name">
        <i id="login_system_icon"></i>
        <span id="username">{`%${userName}%`}</span>
      </div>
      <div className="header-auth-popup js-auth-popup">
        <ul>
          <li>
            <GalleryLink
              id="mygallery_btn"
              hyperLink="https://prntscr.com/gallery.html"
              target="_self"
              text="My Gallery"
            />
          </li>
          <li>
            <LogOutLink id="logout_btn" hyperLink="#" text="Log out" />
          </li>
        </ul>
      </div>
    </div>
  );
}

UserOptions.defaultProps = {
  userName: "username",
};

UserOptions.propTypes = {
  userName: PropTypes.string,
};

export default UserOptions;
