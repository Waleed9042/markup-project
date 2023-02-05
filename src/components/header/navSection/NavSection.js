/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import navData from "../../../dummy/navData";
import NavLink from "./NavLink";

export default function NavSection() {
  return (
    <>
      <span className="text-[#DDDDDD]">|</span>
      <ul className="flex">
        {navData &&
          navData.map((datum) => {
            const { hyperLink, className, text } = datum || {};
            return (
              <div key={text}>
                <NavLink
                  hyperLink={hyperLink}
                  className={className}
                  text={text}
                />
              </div>
            );
          })}
      </ul>
    </>
  );
}
