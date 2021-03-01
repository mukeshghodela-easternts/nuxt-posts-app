<template>
<div class="admin-post-page">
  <section class="update-form">
    <admin-post-form :post="loadedPost"></admin-post-form>
  </section>
</div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm";
export default {
  name: "index.vue",
  layout: 'admin',
  components: {AdminPostForm},
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error, $axios}) {
    return await $axios.$get(`/posts/${params.postId}.json`).then(res => {
      return {loadedPost: res}
    }).catch(e => {
      error(e)
    });
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
