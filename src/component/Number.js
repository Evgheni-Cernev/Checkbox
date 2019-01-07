import React from "react";
import "./App.css";
const state1 = {
  
}
class Number extends React.Component {
  
  state = {
    value: this.props.defaultValue ? this.props.defaultValue : 1,
    new: {filter: ""}
  };
  Plus = () => {
    if (this.props.max !== this.state.value) {
      this.setState({ value: this.state.value + 1 });
    }
  };
  Minus = () => {
    if (this.props.min !== this.state.value) {
      this.setState({ value: this.state.value - 1 });
    }
  };


  handleChange = (event) => {
    if(event.target.checked === true){

      this.setState({ new: this.state.new = {filter: "blur(6px)"}});
    }else{
      this.setState({ new: this.state.new = {filter: "blur()"}});
    }
  }


  render() {
    // console.log(this.state.value);
    // console.log( this.state.new.filter = "blur(6px)")
    return (
      <div>
         <input type="checkbox" onChange={this.handleChange} value="newsletter" />
        <div className="block" style={this.state.new}>
          <div className="count">
            <button onClick={this.Minus}>-</button>
            <span>{this.state.value}</span>
            <button onClick={this.Plus}>+</button>
            <p className="cost">(One-off cost)</p>
          </div>

          <p className="text">+50.00 EURO</p>
          
          <p className="text2">Add-on const one</p>
          <p className="text3" >Spacepole mounting</p>
        </div>
       
      </div>
    );
  }
}
export default Number;
