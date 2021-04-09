import React from "react"

const DisplayCalculator = (props) => {
    return(
        <main>
            <div className="conteiner">
                <div id="display">{props.currentNumber}</div>
                {/* <div id="secondarydisplay">{}</div> */}

                <button id="clear"    onClick={props.handleClick} title="clear">Clear</button>

                <button id="divide"   onClick={props.handleClick}  title="divide" >/</button>
                <button id="multiply" onClick={props.handleClick}  title="multiply">*</button>
                <button id="subtract" onClick={props.handleClick}  title="subtract">-</button>
                <button id="add"      onClick={props.handleClick}  title="add">+</button>
                <button id="equals"   onClick={props.handleClick}  title="equals">=</button>

                <button id="seven"    onClick={props.handleClick}  title="Seven">7</button>
                <button id="eight"    onClick={props.handleClick}  title="Eight">8</button>
                <button id="nine"     onClick={props.handleClick}  title="Nine">9</button>
                
                <button id="four"     onClick={props.handleClick}  title="Four">4</button>
                <button id="five"     onClick={props.handleClick}  title="Five">5</button>
                <button id="six"      onClick={props.handleClick}  title="Six">6</button>

                <button id="one"      onClick={props.handleClick}  title="One">1</button>
                <button id="two"      onClick={props.handleClick}  title="Two">2</button>
                <button id="three"    onClick={props.handleClick}  title="Three">3</button>
                <button id="zero"     onClick={props.handleClick}  title="Zero">0</button> 

                <button id="decimal"  onClick={props.handleClick}  title="Decimal"> <span >.</span> </button>        
            </div>
        </main>
    )
}

export default DisplayCalculator