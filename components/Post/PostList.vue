<template>
  <div>
  <PostPreview
    id="1"
    thumbnail="http://www.freedigitalphotos.net/images/previews/twilight-at-musi-ii-bridge-100668224.jpg"
    title="Post Title 1"
    preview-text="Preview Text 1"
    :is-admin="isAdmin"
  ></PostPreview><br/>
  <PostPreview
    id="2"
    thumbnail="http://www.freedigitalphotos.net/images/previews/twilight-at-musi-ii-bridge-100668224.jpg"
    title="Post Title 2"
    preview-text="Preview Text 2"
    :is-admin="isAdmin"
  ></PostPreview><br/>
  <PostPreview
    id="3"
    thumbnail="http://www.freedigitalphotos.net/images/previews/twilight-at-musi-ii-bridge-100668224.jpg"
    title="Post Title 3"
    preview-text="Preview Text 3"
    :is-admin="isAdmin"
  ></PostPreview><br/>
  <PostPreview
    id="4"
    thumbnail="http://www.freedigitalphotos.net/images/previews/twilight-at-musi-ii-bridge-100668224.jpg"
    title="Post Title 4"
    preview-text="Preview Text 4"
    :is-admin="isAdmin"
  ></PostPreview><br/>
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
      required: false
    }
  }
}
</script>

<style scoped>

</style>
