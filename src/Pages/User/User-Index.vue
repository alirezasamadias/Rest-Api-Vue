<template>
  <Hero title="users" icon="icon-users"/>

  <div class="container card-container">
    <Card :cardId="user.id" v-for="user in users" :key="user.id">
      <template v-slot:cardTitle>
        <h3 class="card-title title-md">{{user.name}}</h3>
      </template>

      <template v-slot:cardBody>
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
      </template>

      <template v-slot:cardBtn>
        <router-link class="card-btn btn btn-primary" :to="{name:'user-page' , params: {id: user.id} }">show user</router-link>
      </template>
    </Card>
  </div>
</template>

<script setup>
// Components
import Hero from '@/Parts/Hero.vue';
import Card from '@/Components/Card.vue';

import axios from 'axios';
import { ref } from 'vue';
import { urlUsers } from '@/Server/Api.js';

const users = ref();

const fetchAPI = async () => {
  const response = await axios.get(urlUsers);
  users.value = response.data;
};

fetchAPI();
</script>