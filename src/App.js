//import { useState } from "react";
import { Decrement, Increment, AddBy, ReduceBy } from "./Store/counterslice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  //const [counter, setCounter] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const onIncrementClick = () => {
    //setCounter(counter + 1);
    dispatch(Increment());
  };
  const onDecrementClick = () => {
    //setCounter(counter - 1);
    dispatch(Decrement());
  };
  const Add = (n) => {
    //setCounter(counter + n);
    dispatch(AddBy(10));
  };
  const DecreaseBy = (n) => {
    //setCounter(counter - n);
    dispatch(ReduceBy(10));
  };
  return (
    <div>
      {count}
      <div>
        <button onClick={() => Add(10)}>Add By 10</button>
        <button onClick={onIncrementClick}>Increment</button>
        <button onClick={onDecrementClick}>Decrement</button>
        <button onClick={() => DecreaseBy(10)}>Decrease By 10</button>
      </div>
    </div>
  );
}

export default App;
