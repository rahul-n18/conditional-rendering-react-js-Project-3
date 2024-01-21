import "./App.css";
import ConditionalAndOperator from "./ConAnd-Operator";
import ConditionalIfElse from "./ConIf-else";
import ConditionalSwitch from "./ConSwitch";
import ConditionalTernary from "./ConTe-Operator";

function App() {
  return (
    <div className="App">
      <h3>Conditional If-Else</h3>
      <ConditionalIfElse />
      <br />
      <h3>Conditional Ternary Operator</h3>
      <ConditionalTernary />
      <br />
      <h3>Conditional And Operator</h3>
      <ConditionalAndOperator />
      <br />
      <h3>Conditional Switch Statement</h3>
      <ConditionalSwitch />
    </div>
  );
}

export default App;
