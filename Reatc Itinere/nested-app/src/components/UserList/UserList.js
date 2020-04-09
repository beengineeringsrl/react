import React, { Component } from "react";

import user from "../Assets/user.json";

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    console.log(user);
    this.setState({
        user
    })
  }

  componentWillReceiveProps(nextProps) {
    alert("componentWillReceiveProps");
  }

  componentDidCatch(error, info) {}


  render() {
    return (
      <div>
        <ul>{this.state.user.map((u) => {
            return(<li>{u.name}</li>)
        })}</ul>
      </div>
    );
  }
}
