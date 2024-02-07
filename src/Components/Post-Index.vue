<template>
  <div class="hero container">
    <i class="hero-icon title-lg icon-posts"></i>
    <h2 class="title-lg">posts</h2>
  </div>

  <router-link :to="{name: 'create-post'}" class="btn btn-create">create post</router-link>
  
  <div class="container card-wrapper">
    <section class="card" v-for="post in posts" :key="post.id">
      <span class="card-id">{{post.id}}</span>

      <h3 class="card-title title-md">{{post.title}}</h3>
      
      <p class="card-body">{{post.body}}</p>

      <router-link :to="{name:'post-page' , params: {id: post.id} }" class="card-btn btn btn-primary">show post</router-link>
    </section>
  </div>
</template>

<script setup>
import axios from 'axios';
import { urlPosts } from '@/Server/Api.js';
import { ref } from 'vue';

const posts = ref();

const fetchAPI = async () => {
  const response = await axios.get(urlPosts);
  posts.value = response.data
};

fetchAPI();
</script>