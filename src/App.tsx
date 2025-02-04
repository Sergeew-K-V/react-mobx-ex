import { observer } from "mobx-react-lite";
import "./App.css";
import postStore from "./store/post-store";
import { useEffect } from "react";

const App = observer(() => {
  const { getPostsAction, posts } = postStore;

  useEffect(() => {
    getPostsAction();
  }, []);
  console.log("~~~~ ~ App ~ posts:", posts);
  return <div className="app-class"></div>;
});

export default App;
