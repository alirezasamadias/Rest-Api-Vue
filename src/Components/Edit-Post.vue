<template>
  <h2 title="title-md">edit post</h2>
  
  <div class="container container-sm">
    <form class="card">
      <div class="form-filed">
        <label for="title">title:</label>
        <input id="title" type="text" v-model="post.title">
      </div>

      <div class="form-filed">
        <label for="body">body:</label>
        <textarea rows="6" id="body" v-model="post.body"></textarea>
      </div>
      
      <input type="submit" class="btn btn-primary" @click.prevent="editCard">
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { urlPosts } from '@/Server/Api.js';
import Swal from 'sweetalert2';

const post = ref({});
const route = useRoute()

const fetchAPI = async () => {
  const response = await axios.get(`${urlPosts}/${route.params.id}`);
  post.value = response.data
};
fetchAPI();

function editCard(){
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure to edit?",
    text: "You won't be able to revert this!",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, edit it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "Edited!",
        text: "Your file has been edited.",
        icon: "success"
      });

      sendCard();
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

const sendCard = async()=>{
  const response = await axios.put(`${urlPosts}/${post.value.id}`,{
    id: post.value.id,
    name: post.value.name
  });

  console.log(response);
};
</script>