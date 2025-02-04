import { observer } from "mobx-react-lite";
import "./App.css";
import postStore from "./store/post-store";
import { useEffect } from "react";
import { RootStoreContext } from "./root-store-context";
import RootStore from "./store/root-store";

const App = observer(() => {
  const { getPostsAction, posts } = postStore;

  useEffect(() => {
    getPostsAction();
  }, []);

  if (posts?.state === "pending") {
    return <div>Loading</div>;
  }

  if (posts?.state === "rejected") {
    return <div>Error</div>;
  }

  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <div className="app-class">
        {posts?.value.map((el) => {
          return <div>{JSON.stringify(el)}</div>;
        })}
      </div>
    </RootStoreContext.Provider>
  );
});

export default App;
