import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, inputAmountCount, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <section>
      <p> {count} </p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>RESET</button>
      </div>

      <input
        type="text"
        onChange={(e) => dispatch(inputAmountCount(e.target.value))}
        value={count}
      />
    </section>
  );
};

export default Counter;
