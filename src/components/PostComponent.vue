<script>
export default {
  name: 'PostComponent',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleLike() {
      this.$store.dispatch('likePost', this.post.id);
    },
  },
};
</script>

<template>
  <article>
    <div>
      <span>{{ post.date }}</span>
      <div v-if="post.image">
        <img :src="post.image" :alt="post.body" />
      </div>
    </div>

    <p>{{ post.body }}</p>

    <div>
      <button class="like-btn" @click="handleLike">Like</button>
      <span>{{ post.likes }} likes</span>
    </div>
  </article>
</template>
