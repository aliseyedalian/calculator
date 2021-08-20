/* eslint-disable no-eval */
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';



class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    };
  }
  btn7 = () =>{
    this.setState({display: this.state.display+'7'})
  }
  btn8 = () =>{
    this.setState({display: this.state.display+'8'})
  }
  btn9 = () =>{
    this.setState({display: this.state.display+'9'})
  }
  btnMns = () =>{
    this.setState({display: this.state.display+'-'})
  }
  btnExp = () =>{
    this.setState({display: this.state.display+'**'})
  }
  btnBack = () =>{
    if (this.state.display.length > 0){
      this.setState({display: this.state.display.substring(0,this.state.display.length-1)})
    }    
  }
  btn4 = () =>{
    this.setState({display: this.state.display+'4'})
  }
  btn5 = () =>{
    this.setState({display: this.state.display+'5'})
  }
  btn6 = () =>{
    this.setState({display: this.state.display+'6'})
  }
  btnX = () =>{
    this.setState({display: this.state.display+'*'})
  }
  btnDiv = () =>{
    this.setState({display: this.state.display+'/'})
  }
  btn1 = () =>{
    this.setState({display: this.state.display+'1'})
  }
  btn2 = () =>{
    this.setState({display: this.state.display+'2'})
  }
  btn3 = () =>{
    this.setState({display: this.state.display+'3'})
  }
  btnPls = () =>{
    this.setState({display: this.state.display+'+'})
  }
  btnC = () =>{
    this.setState({display: ''})
  }
  btn0 = () =>{
    this.setState({display: this.state.display+'0'})
  }
  btnDot = () =>{
    this.setState({display: this.state.display+'.'})
  }
  btnEql = () =>{
    try {
      this.setState({display: eval(this.state.display)})
    } catch (error) {
      this.setState({display: 'Error'})
    }
    
  }

  render() {
    return(
	    <div className="container">
        <p id="display">{this.state.display}</p>
        <div className="btns-box">
          <div>
            <input type="button" className="btn" value="7" onClick={this.btn7}></input>
            <input type="button" className="btn" value="8" onClick={this.btn8}></input>
            <input type="button" className="btn" value="9" onClick={this.btn9}></input>            
            <input type="button" className="btn" value="^" onClick={this.btnExp}></input>
            <input type="button" className="btn" value="&#8592;" onClick={this.btnBack} style={{color:'yellow'}}></input>
          </div>
          <div>
            <input type="button" className="btn" value="4" onClick={this.btn4}></input>
            <input type="button" className="btn" value="5" onClick={this.btn5}></input>
            <input type="button" className="btn" value="6" onClick={this.btn6}></input>
            <input type="button" className="btn" value="x" onClick={this.btnX}></input>
            <input type="button" className="btn" value="&#247;" onClick={this.btnDiv}></input>
          </div>
          <div>
            <input type="button" className="btn" value="1" onClick={this.btn1}></input>
            <input type="button" className="btn" value="2" onClick={this.btn2}></input>
            <input type="button" className="btn" value="3" onClick={this.btn3}></input>
            <input type="button" className="btn" value="+" onClick={this.btnPls}></input>
            <input type="button" className="btn" value="-" onClick={this.btnMns}></input>
          </div>
          <div>
            <input type="button" className="btn" value="C" onClick={this.btnC} style={{color:'red'}}></input>
            <input type="button" className="btn" value="0" onClick={this.btn0}></input>
            <input type="button" className="btn" value="." onClick={this.btnDot}></input>
            <input type="button" className="btn larg" value="=" onClick={this.btnEql}></input>
          </div>
        </div>
      </div>  
	);
  }
}
ReactDOM.render(<Calc />,document.getElementById('root'));


