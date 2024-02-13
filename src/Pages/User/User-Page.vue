<template>
  <Hero title="user" icon="icon-user"/>

  <div class="container container-sm">
    <Card :cardId="user.id">
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
        <div class="card-btn">
          <router-link :to="{name: 'edit-user' , params: {id: user.id} }" class="btn btn-primary">edit</router-link>

          <button class="btn btn-delete" @click="clear">delete</button>
        </div>
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
import { useRoute } from 'vue-router';
import { urlUsers } from '@/Server/Api.js';
import Swal from 'sweetalert2';

const user = ref({});
const route = useRoute();

const fetchAPI = async () => {
  const response = await axios.get(`${urlUsers}/${route.params.id}`);
  user.value = response.data;
};

fetchAPI();

function clear(){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure to delete?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });

      deleteUser();
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your imaginary file is safe :)",
        icon: "error"
      });
    }
  });
}

const deleteUser= async() => {
  await axios.delete(`${urlUsers}/${user.value.id}`);
}
</script>