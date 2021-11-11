import React from "react";
import "./appfeatures.scss";
import { AiFillApple } from "react-icons/ai";
import img1 from "../Imges/rect.jpg";

export default function AppFeatures() {
  return (
    <div className="app">
      <div className="left">
        <h2 className="head">App Features</h2>
        <p>Officia ex proident elit ex commodo aliqua nostrud aute ullamco.</p>
        <p>
          Ullamco id anim enim esse minim velit mollit enim culpa aute irure
          magna sint dolore.
        </p>
        <div className="item">
          <AiFillApple />
          <h5>Coroporis Volupates sit</h5>
        </div>
        <div className="item">
          <AiFillApple />
          <h5>Coroporis Volupates sit</h5>
        </div>
        <div className="item">
          <AiFillApple />
          <h5>Coroporis Volupates sit</h5>
        </div>
        <div className="item">
          <AiFillApple />
          <h5>Coroporis Volupates sit</h5>
        </div>
        <div className="item">
          <AiFillApple />
          <h5>Coroporis Volupates sit</h5>
        </div>
        <div className="item">
          <AiFillApple />
          <h5>Coroporis Volupates sit</h5>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src={img1} />
        </div>
      </div>
    </div>
  );
}
