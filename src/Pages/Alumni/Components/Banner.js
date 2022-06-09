import React from "react";
import header from "../../../assets/teamPageBanner.png";

const Banner = () => {
  return (
    <div className="BannerContainer">
      <img src={header} id="banner" />
      <div className="BannerText">
        <div>
          <h4 id="header-title">Meet our Team</h4>
          <h2 id="header-text">
            This is us! We’re a group of students passionate about building tech
            for the greater good.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
