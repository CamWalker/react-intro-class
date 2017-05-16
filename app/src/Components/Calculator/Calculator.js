import React, { Component } from 'react';
import calculatorImg from '../../../../calculator.png'

class Calculator extends Component {
  constructor (props) {
    super();
    this.state = {
      header: 'Calculator',
      display: '0',
      operator: '',
      temp: 0,
      resetDisplay: false
    }
    this.updateHeader = this.updateHeader.bind(this);
  }

  updateHeader(val) {
    this.setState({ header: val });
  }


  render() {
    return (
      <div id="calculator-container">
        <input id="header-input" onChange={(e) => this.updateHeader(e.target.value)} placeholder="hello"/>
        <h1 id="header"> {this.state.header} </h1>
        <img className="remove-highlight" src={calculatorImg} alt="calculator" />
        <div id="calculator-mask" className="remove-highlight">
          <div className="output">
            <span className="total"></span>
          </div>

          <div className="btn clear"></div>

          <div className="btn zero"></div>
          <div className="btn one"></div>
          <div className="btn two"></div>
          <div className="btn three"></div>
          <div className="btn four"></div>
          <div className="btn five"></div>
          <div className="btn six"></div>
          <div className="btn seven"></div>
          <div className="btn eight"></div>
          <div className="btn nine"></div>

          <div className="btn equal"></div>
          <div className="btn multiply"></div>
          <div className="btn divide"></div>
          <div className="btn subtract"></div>
          <div className="btn add"></div>
        </div>
      </div>
    )
  }
}


export default Calculator;
