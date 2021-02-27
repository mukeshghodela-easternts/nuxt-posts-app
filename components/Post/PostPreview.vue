<template>
  <div class="img" :style="{height:'160px', marginBottom: '20px'}">
    <nuxt-link :to="postLink">
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
    },
    isAdmin : {
      type: Boolean,
      required: false
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/'+ this.id : '/posts/' + this.id;
    }
  }
}
</script>

<style scoped>
.img {
  background-image: url("~assets/images/img.png");
  padding: 20px;
}
</style>
