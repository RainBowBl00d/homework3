import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [
      {
        id: 1,
        author: 'Trevor Mäe',
        avatar: 'TM',
        date: 'Oct 22, 2026',
        message: 'Did we have homework today?',
        image: null,
        likes: 0,
      },
      {
        id: 2,
        author: 'Innar Raudsepp',
        avatar: 'IR',
        date: 'Oct 22, 2026',
        message: "Nah, tomorrows the exam dude. Don't u know?",
        image: null,
        likes: 0,
      },
      {
        id: 3,
        author: 'Trevor Mäe',
        avatar: 'TM',
        date: 'Oct 22, 2026',
        message: "No I didn't, welp YOLO it is ig.",
        image: null,
        likes: 0,
      },
      {
        id: 4,
        author: 'Innar Raudsepp',
        avatar: 'IR',
        date: 'Oct 22, 2026',
        message: 'gl',
        image: null,
        likes: 0,
      },
      {
        id: 5,
        author: 'Charlie Green',
        avatar: 'CG',
        date: 'Oct 25, 2026',
        message: "Don't forget to submit your GitHub repository links through Moodle!",
        image: null,
        likes: 0,
      },
      {
        id: 6,
        author: 'Diana Prince',
        avatar: 'DP',
        date: 'Oct 28, 2026',
        message: 'Group meeting at 5 PM today in the computer lab.',
        image: null,
        likes: 0,
      },
      {
        id: 7,
        author: 'Evan Wright',
        avatar: 'EW',
        date: 'Oct 30, 2026',
        message: 'Successfully deployed our project on GitHub Pages 🚀',
        image:
          'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
        likes: 0,
      },
      {
        id: 8,
        author: 'Fiona Gallagher',
        avatar: 'FG',
        date: 'Oct 31, 2026',
        message: 'Can someone share notes from the JavaScript lecture?',
        image: null,
        likes: 0,
      },
      {
        id: 9,
        author: 'George King',
        avatar: 'GK',
        date: 'Oct 31, 2026',
        message: 'Coffee break before the next coding sprint.',
        image: null,
        likes: 0,
      },
      {
        id: 10,
        author: 'Hannah Abbott',
        avatar: 'HA',
        date: 'Nov 1, 2026',
        message: 'Any tasks due tomorrow?',
        image: null,
        likes: 0,
      },
    ],
  },
  getters: {
    allPosts: (state) => state.posts,
    postById: (state) => (id) => state.posts.find((p) => p.id === id),
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
