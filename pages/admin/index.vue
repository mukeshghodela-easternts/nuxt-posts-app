<template>
  <div class="admin-page">
    <section class="new-post">
      <app-button @click="$router.push('/admin/new-post')">Create Post</app-button>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts
      </h1>
      <PostList :isAdmin="true" :posts="loadedPosts"></PostList>
    </section>
  </div>
</template>

<script>
import PostList from "@/components/Post/PostList";
import AppButton from "@/components/UI/AppButton";

export default {
  name: "index",
  layout: 'admin',
  components: {
    AppButton,
    PostList,
  },
  computed: {
    loadedPosts() {
      return this.$store.getters['posts/loadedPosts'];
    }
  },
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
