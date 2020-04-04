import React, { Component } from 'react';
import './App.css';
import KeyPad from './KeyPadComponent.js';
import Result from './ResultComponent.js';


class App extends Component {

  constructor() {
    super();

    this.state = {
      result: ""
    }


  }


  handleClick = (button) => {

    switch (button) {
      case '=':
        try {
          const result = eval(this.state.result);
          this.setState({ result: result })
          console.log(result);
        } catch (error) {
          console.log(error)
        }
        break;
      case '+':
        this.setState({ result: this.state.result += '+' });
        console.log("plus");
        break;
      case '-':
        this.setState({ result: this.state.result += '-' });
        console.log("minus");
        break;
      case '*':
        this.setState({ result: this.state.result += 'x' });
        console.log("times");
        break;
      case '/':
        console.log("divide");
        this.setState({ result: this.state.result += '/' });
        break;
      case 'c':
        this.setState({ result: "" });
        break;
      case 'del':
        this.setState({ result: "" });
        break;
      default:
        this.setState({ result: this.state.result += button });
        break;
    }

  };


  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  calculate = () => {
    console.log("tes")
  }

  render() {
    return (
      <div className="calculator-container mt-5">
        <Result result={this.state.result} />
        <KeyPad button={this.handleClick} />
      </div>
    );
  }
}

export default App;
