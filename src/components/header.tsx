import * as React from "react";
import "./../assets/scss/App.scss";

const logo = require("./../assets/img/bttrbetta-logo.svg");

export interface HeaderProps {
}

export default class Header extends React.Component<HeaderProps, undefined> {
  alert() {
    alert("Coming soon!");
  }

  render() {
    return (
      <div className="header">
        <img src={logo} height="56px"/>
        <span className="links" onClick={() => this.alert()}>
          Care FAQ - Coming soon
        </span>
        <span className="links" onClick={() => this.alert()}>
          Supplies - Coming soon
        </span>
      </div>
    );
  }
}
