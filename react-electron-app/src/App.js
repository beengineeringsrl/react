import React, { Component } from "react";
import logo from "./logo.svg";
import "./style/App.css";
import Interpreter from "js-interpreter";
var myCode = `
var result = [];
function fibonacci(n, output) {
  var a = 1, b = 1, sum;
  for (var i = 0; i < n; i++) {
    output.push(a);
    sum = a + b;
    a = b;
    b = sum;
  }
}
fibonacci(16, result);
alert(result.join(', '));
`;
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: '2*9'
    }
    this.onClick = this.onClick.bind(this);
  }


  onClick() {
    this.setState({
      val:'2*8'
    })
    const myInterpreter = new Interpreter(this.state.val);

    myInterpreter.run();

   alert(myInterpreter.value);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <input type="text" value={this.state.val} />
          <button type="button" onClick={this.onClick}>
            esegui js
          </button>
        </div>
      </div>
    );
  }
}

export default App;
