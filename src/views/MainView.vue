<script>
import { mapGetters } from 'vuex';
import PostComponent from '../components/PostComponent.vue';

export default {
  name: 'MainView',
  components: {
    PostComponent,
  },
  computed: {
    ...mapGetters({
      posts: 'allPosts',
    }),
  },
  methods: {
    resetLikes() {
      this.$store.dispatch('resetAllLikes');
    },
  },
};
</script>

<template>
  <main>
    <PostComponent v-for="post in posts" :key="post.id" :post="post" />
    <div>
      <button class="reset-btn" @click="resetLikes">Reset likes</button>
    </div>
  </main>
</template>
