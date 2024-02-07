<template>
  <div class="hero container">
    <i class="hero-icon title-lg icon-user"></i>
    <h2 class="title-lg">user</h2>
  </div>

  <div class="container container-sm">
    <section class="card">
      <h3 class="title-md">{{user.name}}</h3>

      <span class="card-id">{{user.id}}</span>

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

      <div class="card-btn">
        <router-link :to="{name: 'edit-user' , params: {id: user.id} }" class="btn btn-primary">edit</router-link>

        <button class="btn btn-delete" @click="clear">delete</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { urlUsers } from '@/Server/Api.js';
import Swal from 'sweetalert2';

const user = ref({});
const route = useRoute();

const fetchAPI = async () => {
  const response = await axios.get(`${urlUsers}/${route.params.id}`);
  user.value = response.data
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
  const response = await axios.delete(`${urlUsers}/${user.value.id}`);
  console.log(response)
}
</script>