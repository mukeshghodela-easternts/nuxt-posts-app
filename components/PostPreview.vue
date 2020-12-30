<template>
  <div :style="{height:'160px',backgroundImage: `url(${thumbnail})`, padding: '20px'}">
    <nuxt-link :to="`/posts/${id}`">
      <article>
        <h3>{{ title }}</h3>
        <p>{{ previewText }}</p>
      </article>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>
