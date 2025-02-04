import { makeAutoObservable } from "mobx";

class CounterStoreWithProps {
  count: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  get powedCount() {
    return Math.pow(this.count, 2);
  }

  increment = () => {
    this.count++;
  };

  decrement = () => {
    this.count--;
  };
}

export default CounterStoreWithProps;
