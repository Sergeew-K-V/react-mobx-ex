import { makeAutoObservable, runInAction } from "mobx";
import { getPosts, IPosts } from "../api/getPosts";

class PostStore {
  posts: IPosts[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getPostsAction = async () => {
    try {
      this.isLoading = true;
      const res = await getPosts();

      runInAction(() => {
        this.posts = res;
        this.isLoading = false;
      });
    } catch (error) {
      console.log(
        "~~~~ ~ PostStore ~ getPostsAction=async ~ error~~~~:",
        error
      );
    }
  };
}

export default new PostStore();
