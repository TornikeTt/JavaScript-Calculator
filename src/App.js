import React from "react"
import DisplayCalculator from "./DisplayCalculator"
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lastPressed: undefined,
      currentNumber: "0",
    }
  }

  handleClick = (e) => {
    /* catch__Buttons -->  see which button use click by user
       and also see buttton whitch clicked what value had (for example: 1 , 5 , + , -. etc... )
    */
    const catch__Buttons = e.target.innerText;
    const operation = [ '/', '*', '-', '+'];
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  /* switch Statement =================================================================================================== */

    switch(catch__Buttons) {
      case "Clear": {
        this.setState({
          lastPressed: undefined,
          currentNumber: "0",
        })
        break;
      }
      /*
        when user click "Decimal" that happend (for example)
         --> userType = 10 + 5 + 10.5
         --> splitted = [10 , 5 , 10] 
         --> last = [10]
         --> then we check if "last variable" don't has . we add "Decimal"
         --> otherwise we do nothing
      */
      case ".": {
        const splitted = this.state.currentNumber.split(/[\+\-\*\/]/);
        const last = splitted.slice(-1)[0];
        console.log(splitted)
        console.log(last)
        if( !last.includes('.') ) {
          this.setState({
            currentNumber: this.state.currentNumber + "."
          })
        }           
        break;
      }
      
      case "=": {
        const evaluated = eval(this.state.currentNumber)
        this.setState({
          currentNumber: evaluated,
        })
        break;
      }
      /*
        in default case we "calculated" any other arithmetic operators what may user do
          1. first "if statemen" we use to define if user click arithmetic operator [/ , + , - , *]
              1.1 into first "if Statement" we have another "if Statement" where we handle if user type several arithmetic operators
              for example user type 5+/*
      */
      default: { 
        let calculated = undefined;
        if(operation.includes(catch__Buttons)) {

          if(operation.includes(this.state.lastPressed) && catch__Buttons !== '-') {
            console.log("-----------------------------------------")
            const lastNumberIdx = this.state.currentNumber.
              split('').
              reverse().
              findIndex(char => char !== ' ' && nums.includes( Number(char) ));    
            calculated = this.state.currentNumber.slice(0, this.state.currentNumber.length - lastNumberIdx) + ` ${catch__Buttons} `
          } else {
            calculated = `${this.state.currentNumber} ${catch__Buttons} `;
          }

        } else {
          calculated = this.state.currentNumber == '0' ? catch__Buttons : this.state.currentNumber + catch__Buttons;
        }
        
        this.setState({
          currentNumber: calculated
        });
        break;
      }

    }
    
    this.setState({
      lastPressed: catch__Buttons
    })

  }

  render() {   
      return (
        <DisplayCalculator currentNumber={this.state.currentNumber} handleClick={this.handleClick}/>
    );
  }
 
}

export default App;