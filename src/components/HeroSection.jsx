import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero__container">
      <video src="./videos/video-2.mp4" autoPlay loop muted></video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero__btns">
        <Button
          className="btns"
          buttonStyle="btn__outline"
          buttonSize="btn__large"
        >
          {" "}
          GET STARTED{" "}
        </Button>
        <Button
          className="btns"
          buttonStyle="btn__primary"
          buttonSize="btn__large"
        >
          {" "}
          WATCH TRAILER <i className="far fa-play-circle" />{" "}
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
