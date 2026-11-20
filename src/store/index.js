import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [
      {
        id: 1,
        date: 'Oct 22, 2022',
        body: 'Tartu 2022',
        image: 'https://picsum.photos/id/1018/600/400',
        likes: 21,
      },
    ],
  },
  getters: {
    allPosts: (state) => state.posts,
  },
  mutations: {
    INCREMENT_LIKE(state, postId) {
      const post = state.posts.find((p) => p.id === postId);
      if (post) {
        post.likes += 1;
      }
    },
    RESET_LIKES(state) {
      state.posts.forEach((post) => {
        post.likes = 0;
      });
    },
  },
  actions: {
    likePost({ commit }, postId) {
      commit('INCREMENT_LIKE', postId);
    },
    resetAllLikes({ commit }) {
      commit('RESET_LIKES');
    },
  },
});
