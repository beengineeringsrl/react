import React from "react";
import CustomInput from "./CustomInput";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  changeText = (evt) => {
    this.setState({
      username: evt.target.value,
    });
  };

  render() {
    return (
      <div className="form-group">
        <CustomInput
          type="text"
          placeholder="type text input...."
          value={this.state.username || ""}
          onChange={(evt)=> this.changeText(evt)}
          label="username"
        />
      </div>
    );
  }
}
