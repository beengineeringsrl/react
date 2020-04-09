import React, { Component } from "react";
import './Footer.css'

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    alert(e.target.innerText);
  }

  render() {
    return (
      <div>
        <p 
        className={this.props.copyClass}
        onClick={(evt) => this.handleClick(this.props)}
        >{this.props.copyright}</p>
      </div>
    );
  }
}
