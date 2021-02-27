<template>
  <div>
  <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :previewText="post.previewText" />
  </div>
</template>

<script>
import PostPreview from "@/components/Post/PostPreview";
export default {
name: "PostList",
  components: {
    PostPreview
  },
   props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
