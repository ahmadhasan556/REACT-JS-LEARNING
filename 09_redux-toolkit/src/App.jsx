import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { todos } from "./lib/data";
// redux
// 1. create a store
// 2. create a slice (reducer + actions)
// 3.provide slice to store
// 4. useSelector to get state from the store or read data from the store
// 5. useDispatch to dispatch actions to the store or functions that will update the state in the store
function App() {
  const { count, name } = useSelector((state) => state.counter); // for getting whole counter state
  // const count = useSelector((state) => state.counter.value); # for getting only count value
  const dispatch = useDispatch(); // for dispatching actions to the store
  return (
    <>
      <div className="">
        <h1 className="text-2xl">
          {count} - {name}
        </h1>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-3 bg-green-400 "
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-3 bg-red-400 "
        >
          -
        </button>
        {/* increment by amount */}
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-4 py-3 bg-blue-400 "
        >
          Increment by 5
        </button>
      </div>
    </>
  );
}

export default App;
