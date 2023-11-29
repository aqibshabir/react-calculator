import { useReducer } from "react";
import "./app.css";

function App() {
  return (
    <div className="container">
      <div className="calculator-container">
        <div className="calculator-grid">
          <div className="output">
            <div className="previous-operand">12345</div>
            <div className="current-operand">12345</div>
          </div>
          <button id="clear-buttons" className="span-two">
            AC
          </button>
          <button id="clear-buttons">DEL</button>
          <button id="operator"> ÷ </button>
          <button> 7 </button>
          <button> 8 </button>
          <button> 9 </button>
          <button id="operator"> x </button>
          <button> 4 </button>
          <button> 5 </button>
          <button> 6 </button>
          <button id="operator"> + </button>
          <button> 1 </button>
          <button> 2 </button>
          <button> 3 </button>
          <button id="operator"> - </button>
          <button className="bottom-left"> . </button>
          <button className="span-two"> 0 </button>
          <button id="operator" className="bottom-right">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
