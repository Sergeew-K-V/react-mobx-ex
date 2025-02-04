import { observer } from "mobx-react-lite";
import "./App.css";
import CounterByProps from "./components/CounterByProps";
import CounterStoreWithProps from "./store/counter-store-multi";

const counter1 = new CounterStoreWithProps();
const counter2 = new CounterStoreWithProps();

const App = observer(() => {
  return (
    <div className="app-class">
      <div style={{ display: "flex", alignItems: "center", gap: "5rem" }}>
        <h3>Default counter</h3>
        <CounterByProps {...counter1} powedCount={counter1.powedCount} />
      </div>
      <hr />
      <div style={{ display: "flex", alignItems: "center", gap: "5rem" }}>
        <h3>With props counter</h3>
        <CounterByProps {...counter2} powedCount={counter2.powedCount} />
      </div>
    </div>
  );
});

export default App;
