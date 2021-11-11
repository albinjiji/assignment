import React from "react";
import "./topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#Landing" className="logo">
            Assignment
          </a>
        </div>
        <div className="right">
          <a href="#Landing" className="home">
            <span>Home</span>
          </a>
          <a href="#AppFeatures" className="app">
            <span>App Features</span>
          </a>
          <a href="#Gallery" className="gallery">
            <span>Gallery</span>
          </a>
          <a href="#Pricing" className="pricing">
            <span>Pricing</span>
          </a>
          <a href="#Frequent" className="frequent">
            {" "}
            <span>F A Q</span>
          </a>
          <a href="#Contact" className="contact">
            <span>Contact US</span>
          </a>
          <span className="container">Get Started</span>
        </div>
      </div>
    </div>
  );
}
