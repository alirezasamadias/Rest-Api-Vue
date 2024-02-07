<template>
  <div class="hero container">
    <i class="hero-icon title-lg icon-users"></i>
    <h2 class="title-lg">users</h2>
  </div>
  
  <div class="container card-wrapper">
    <section class="card" v-for="user in users" :key="user.id">
      <span class="card-id">{{user.id}}</span>

      <h3 class="title-md">{{user.name}}</h3>

      <ul class="card-list">
        <li class="card-list-item">
          <span>Username:</span>
          {{user.username}}
        </li>
        <li class="card-list-item">
          <span>Email:</span>
          {{user.email}}
        </li>
        <li class="card-list-item">
          <span>Phone:</span>
          {{user.phone}}
        </li>
        <li class="card-list-item">
          <span>Website:</span>
          {{user.website}}
        </li>
      </ul>

      <router-link class="card-btn btn btn-primary" :to="{name:'user-page' , params: {id: user.id} }">show user</router-link>
    </section>
  </div>
</template>

<script setup>
import axios from 'axios';
import { urlUsers } from '@/Server/Api.js';
import {ref} from 'vue';
const users = ref();

const fetchAPI = async () => {
  const response = await axios.get(urlUsers);
  users.value = response.data
};

fetchAPI();
</script>