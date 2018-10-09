import * as React from "react";
import "./../assets/scss/App.scss";

const dog = require("./../assets/img/dog.png");
const logo = require("./../assets/img/picture-telephone-landing-logo.png");
const googleStore = require("./../assets/img/google-store.png");
const appleStore = require("./../assets/img/apple-store.png");

export interface HomeProps {
}

export interface LandingFormProps {
}

export class LandingForm extends React.Component<LandingFormProps, undefined> {
  render() {
    return (
      <div>
        <div className="section-gradient flex-row">
          <img className="half-size" src={logo} /> 
          <img className="align-right half-size" src={dog} />
        </div>
        <div className="section-white flex-column">
          <h1>DRAW AND GUESS WITH FRIENDS - FREE!</h1>
          <div className="flex-row">
            <img className="appstore-button padding-right" src={appleStore} />
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.jiechou.playpicturetelephone">
              <img className="appstore-button padding-left" src={googleStore} />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export class SuppliesCards extends React.Component<LandingFormProps, undefined> {
  render() {
    return (
      <div className="section-white flex-row">
        <span className="flex-row">

        </span>
        <span className="flex-row">

        </span>
      </div>
    )
  }
}

export default class Home extends React.Component<HomeProps, undefined> {
  render() {
    return (
      <>
        <LandingForm />
      </>
    );
  }
}
