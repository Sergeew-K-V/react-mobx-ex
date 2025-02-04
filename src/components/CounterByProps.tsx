interface CounterByPropsProps {
  count: number;
  powedCount: number;
  increment: () => void;
  decrement: () => void;
}

const CounterByProps = ({
  count,
  decrement,
  increment,
  powedCount,
}: CounterByPropsProps) => {
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
};

export default CounterByProps;
