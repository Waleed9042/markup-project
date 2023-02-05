import React from "react";
import BookNowButton from "./bookNow/BookNowButton";
import ContactSection from "./contactSection/ContactSection";
import LogoContainer from "./logoContainer/LogoContainer";
import NavSection from "./navSection/NavSection";

import SpaImage from "../../images/spa.png";

export default function Header() {
  return (
    <div className="flex flex-row bg-[#FFFFFF] h-16 pt-3">
      <div className="flex basis-1/2">
        <div className="flex justify-center basis-1/2">
          <LogoContainer
            imgSrc={SpaImage}
            alternateText="Logo"
            title="Skinspa"
            colorHash="#FCC761"
          />
        </div>
        <div className="flex justify-end basis-1/2">
          <ContactSection />
        </div>
      </div>
      <div className="flex basis-1/2">
        <div className="flex justify-start items-center text-center">
          <NavSection />
        </div>
        <div className="flex justify-start items-center text-center">
          <BookNowButton
            btnText="Book Now"
            borderColor="FCC761"
            textColor="FCC761"
          />
        </div>
      </div>
    </div>
  );
}