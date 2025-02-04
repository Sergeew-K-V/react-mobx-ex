import { observer } from "mobx-react-lite";
import counterStore from "../store/counter-store";

const Counter = observer(() => {
  const { count, decrement, increment, powedCount } = counterStore;

  return (
    <>
      <div>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>Count: {count}</div>
      <div> Powed Count: {powedCount}</div>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
});

export default Counter;
