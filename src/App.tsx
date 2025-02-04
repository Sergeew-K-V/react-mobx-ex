import "./App.css";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div className="app-class">
      <div style={{ display: "flex", alignItems: "center", gap: "5rem" }}>
        <h3>Default counter</h3>
        <Counter />
      </div>
      <hr />
      <div style={{ display: "flex", alignItems: "center", gap: "5rem" }}>
        <h3>With props counter</h3>
        <Counter />
      </div>
    </div>
  );
};

export default App;
