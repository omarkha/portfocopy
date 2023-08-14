import React from "react";
import twitter from "../media/twitter.png";
import instagram from "../media/instagram.png";
import facebook from "../media/facebook.png";
import linkedin from "../media/linkedin.png";
import { Fade } from "react-reveal";
const Socials = () => {
  return (
    <div className="floating-socials">
      <Fade top>
        <div
          className="instagram"
          style={{ backgroundImage: `url(${instagram})` }}
        />
      </Fade>
      <Fade left>
        <div
          className="twitter"
          style={{ backgroundImage: `url(${twitter})` }}
        />
      </Fade>
      <Fade right>
        <div
          className="facebook"
          style={{ backgroundImage: `url(${facebook})` }}
        />
      </Fade>
      <Fade bottom>
        <div
          className="linkedin"
          style={{ backgroundImage: `url(${linkedin})` }}
        />
      </Fade>
    </div>
  );
};

export default Socials;
