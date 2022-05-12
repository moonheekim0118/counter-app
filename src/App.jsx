import "./App.css";
import { useState } from "react";

import ButtonGroup from "./ButtonGroup";
import ShowCount from "./ShowCount";
import InputRange from "./InputRange";
import useSelector from "./react-redux/useSelector";
import useDispatch from "./react-redux/useDispatch";

function App() {
  const dispatch = useDispatch();
  const { count, diff } = useSelector((state) => state.counter);
  const onIncrement = () => dispatch({ type: "INCREMENT" });
  const onDecrement = () => dispatch({ type: "DECREMENT" });
  const onReset = () => dispatch({ type: "RESET" });

  const handleDiff = ({ target }) =>
    dispatch({ type: "SET_DIFF", payload: target.valueAsNumber });

  return (
    <div className="App">
      <main className="App-main">
        <ShowCount count={count} diff={diff} />
        <InputRange handleDiff={handleDiff} diff={diff} />
        <ButtonGroup
          onDecrement={onDecrement}
          onReset={onReset}
          onIncrement={onIncrement}
        />
      </main>
    </div>
  );
}

export default App;
