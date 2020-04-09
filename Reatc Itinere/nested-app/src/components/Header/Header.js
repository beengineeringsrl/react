import React, { Component } from "react";
import { META } from "../Config/Constant";
import logo from "../Assets/logo.svg";

export default class Header extends Component {
    
  render() {
    return (
      <header className={this.props.headerClassName}>
        <img 
        src={logo} 
        className={this.props.logoClassName} 
        alt={this.props.altTitleText}
        />
        <p>{META.TITLE}</p>
        <a
          className="App-link"
          href={META.LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          {META.SUB_TITLE}
        </a>
      </header>
    );
  }
}
