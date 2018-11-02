import * as React from "react";
import "./../assets/scss/App.scss";

const dog = require("./../assets/img/dog.png");
const logo = require("./../assets/img/picture-telephone-landing-logo.png");
const googleStore = require("./../assets/img/google-store.png");
const appleStore = require("./../assets/img/apple-store.png");
const drawSequence = require("./../assets/img/draw-sequence.png");
const floppyCorgi = require("./../assets/img/floppy.png")

class Buttons extends React.Component {
  render() {
    return(
      <div className="flex-row">
        <img className="appstore-button padding-right" src={appleStore} />
        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.jiechou.playpicturetelephone">
          <img className="appstore-button padding-left" src={googleStore} />
        </a>
      </div>
    )
  }
}

export class LandingForm extends React.Component {
  componentDidMount() {
    const ua = navigator.userAgent.toLowerCase();
      const isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
      if(isAndroid) {
        // Redirect to Android-site
        // @ts-ignore
      window.location = 'https://play.google.com/store/apps/details?id=com.jiechou.playpicturetelephone';
    }
  }

  render() {
    return (
      <div>
        <div className="section-gradient flex-row">
          <div className="flex-column">
            <img className="full-size" src={logo} />
            <h2>"The best party game out there. I laughed so hard my stomach hurts."</h2>
          </div>
          <img className="align-right half-size" src={dog} />
        </div>
        <div className="section-white flex-column">
          <h1><span className="orange">DRAW </span>AND <span className="green">GUESS </span>WITH FRIENDS - FREE!</h1>
          <Buttons />
        </div>
      </div>
    )
  }
}

class ExplainerSection extends React.Component {
  render() {
    return (
      <div className="section-gradient flex-row space-around" id="explainer-section">
        <img id="long-image" src={drawSequence} />
        <div className="flex-column space-between" id="long-text">
          <h3>1. Choose a word for your friends to draw</h3>
          <h3>2. Draw the word given by your friend</h3>
          <h3>3. Alternate between drawing and guessing</h3>
          <h3>4. Share hilarious results with friends!</h3>
        </div>
      </div>
    )
  }
}

class EndSection extends React.Component {
  render() {
    return(
      <div className="section-white flex-column">
        <img id="short-image" src={floppyCorgi} />
        <h2>MAKE FLOPPY THE CORGI HAPPY BY DOWNLOADING</h2>
        <Buttons />
      </div>
    )
  }
}

export default class Home extends React.Component {
  render() {
    return (
      <>
        <LandingForm />
        <ExplainerSection />
        <EndSection />
      </>
    );
  }
}
