<template>
  <Hero title="posts" icon="icon-posts"/>

  <router-link :to="{name: 'create-post'}" class="btn btn-create">create post</router-link>
  
  <div class="container card-container">
    <Card v-for="post in posts" :key="post.id" :cardId="post.id">
      <template v-slot:cardTitle>
        <h3 class="card-title title-md">{{post.title}}</h3>
      </template>

      <template v-slot:cardBody>
        <p class="card-body">{{post.body}}</p>
      </template>

      <template v-slot:cardBtn>
        <router-link :to="{name:'post-page' , params: {id: post.id} }" class="card-btn btn btn-primary">show post</router-link>
      </template>
    </Card>
  </div>
</template>

<script setup>
// Components
import Hero from '@/Parts/Hero.vue';
import Card from '@/Components/Card.vue';

import axios from 'axios';
import { urlPosts } from '@/Server/Api.js';
import { ref } from 'vue';

const posts = ref();

const fetchAPI = async () => {
  const response = await axios.get(urlPosts);
  posts.value = response.data;
};

fetchAPI();
</script>