<template>
  <div class="row">
    <div class="column">
      <div class="card">
        <img :src="loadedPost.thumbnail" alt="Jane" style="width:100%">
        <div class="container">
          <h2>{{loadedPost.author}}</h2>
          <p class="title">{{loadedPost.title}}</p>
          <p>Last updated on {{loadedPost.updatedDate}}</p>
          <p>{{loadedPost.previewText}}</p>
          <p>{{loadedPost.content}}</p>
          <p><a :href="`mailto:${loadedPost.email}`">{{loadedPost.email}}</a></p>
          <p><button class="button">Contact</button></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index.vue",
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    // const loadedPost = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`);
    // return { loadedPost }
      return {loadedPost: {
        id: "1",
        author: "Mukesh Ghodela (ID: "+ params.id +")",
        title: "CEO & Founder ",
        thumbnail: "https://www.w3schools.com/w3images/man_smoke.jpg",
        email: "mukesh.easternts@gmail.com",
        conten: "Lets add some summy content",
        previewText: "This is our preview text",
        updatedDate: (new Date()).toLocaleString(),
      }}
    
  },
}
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  width: 25%;
  margin: auto;                                                           ;
  padding: 0 8px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.container {
  padding: 0 16px;
  padding-right: 32px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}
@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>
