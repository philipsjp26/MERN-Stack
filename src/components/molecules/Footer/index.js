import React from "react";
import "./footer.scss";
import {
  ICDiscord,
  ICFacebook,
  ICInstagram,
  ICTelegram,
  Logo,
} from "../../../assets";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={Logo} alt="images-Logo" />
        </div>
      <div className="social-wrapper">
        <Icon img={ICFacebook} />
        <Icon img={ICInstagram} />
        <Icon img={ICTelegram} />
        <Icon img={ICDiscord} />
        <Icon img={ICFacebook} />
        <Icon img={ICFacebook} />
      </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
