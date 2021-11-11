import React from "react";
import "./landing.scss";
import img1 from "../Imges/hero.png";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";

export default function Landing() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="wrapper">
          <h2 className="heading">App landing page template</h2>
          <div className="para">
            <p>
              Fugiat occaecat est dolore labore. Qui dolor ipsum eiusmod aute
              amet occaecat ut. Lorem duis aute quis sint. Aute ex commodo ad
              minim do
            </p>
          </div>
          <div className="button">
            <span>
              <FaGooglePlay />
              Google Play
            </span>
          </div>
          <div className="but">
            <span>
              <AiFillApple />
              App Store
            </span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer" alt="">
          <img src={img1} />
        </div>
      </div>
    </div>
  );
}
