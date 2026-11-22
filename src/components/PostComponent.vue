<script>
export default {
  name: 'PostComponent',
  props: {
    postId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    post() {
      return this.$store.getters.postById(this.postId);
    },
  },
  methods: {
    handleLike() {
      this.$store.dispatch('likePost', this.postId);
    },
  },
};
</script>

<template>
  <article v-if="post" class="post">
    <div class="post-head">
      <span class="avatar" aria-hidden="true">{{ post.avatar }}</span>
      <span class="post-author">{{ post.author }}</span>
      <span class="post-date">{{ post.date }}</span>
    </div>

    <img v-if="post.image" :src="post.image" :alt="post.message" class="post-img" />

    <p class="post-body">{{ post.message }}</p>

    <div class="post-foot">
      <button class="like-btn" @click="handleLike" aria-label="Like this post">Like</button>
      <span>{{ post.likes }} likes</span>
    </div>
  </article>
</template>

<style scoped>
.post {
  background-color: #d4d8dd;
  border-radius: 10px;
  padding: 12px;
  margin: 0 auto 16px;
  max-width: 420px;
}

.post-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-img {
  width: 100%;
  border-radius: 6px;
  margin: 10px 0 4px;
  display: block;
}

.post-body {
  margin: 8px 0;
}

.post-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.like-btn {
  background: none;
  font-size: 1rem;
  cursor: pointer;
}

.post-head {
  display: flex;
  align-items: center;
  gap: 8px;
}
.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #8b95a1;
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 0.8rem;
  font-weight: 600;
}
.post-date {
  margin-left: auto;
  font-size: 0.85rem;
}
</style>
