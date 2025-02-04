import { makeAutoObservable } from "mobx";
import { getPosts, IPosts } from "../api/getPosts";
import { fromPromise, IPromiseBasedObservable } from "mobx-utils";

class PostStore {
  posts?: IPromiseBasedObservable<IPosts[]>;

  constructor() {
    makeAutoObservable(this);
  }

  getPostsAction = () => {
    this.posts = fromPromise(getPosts());
  };
}

export default new PostStore();
