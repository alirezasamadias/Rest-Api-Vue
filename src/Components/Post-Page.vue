<template>
  <div class="hero container">
    <i class="hero-icon title-lg icon-post"></i>
    <h2 class="title-lg">post</h2>
  </div>

  <div class="container container-sm">
    <section class="card">
      <span class="card-id">{{post.id}}</span>

      <h2 class="card-title title-md">{{post.title}}</h2>
      
      <p class="card-body">{{post.body}}</p>

      <div class="card-btn">
        <router-link :to="{name: 'edit-post' , params: {id: post.id} }" class="btn btn-primary">edit</router-link>

        <button class="btn btn-delete" @click="clear">delete</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { urlPosts } from '@/Server/Api.js';
import Swal from 'sweetalert2';

const post = ref({});
const route = useRoute();

const fetchAPI = async () => {
  const response = await axios.get(`${urlPosts}/${route.params.id}`);
  post.value = response.data;
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
  const response = await axios.delete(`${urlPosts}/${post.value.id}`);
  console.log(response)
}
</script>