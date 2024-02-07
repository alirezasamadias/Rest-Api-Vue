<template>
  <div class="hero container">
    <div class="hero-icon title-lg">
      <i class="icon-user"></i>
      <i class="icon-edit-user"></i>
    </div>

    <h2 class="title-lg">edit user</h2>
  </div>
  
  <div class="container container-sm">
    <form class="card">
      <div class="form-filed">
        <label for="name">name:</label>
        <input id="name" type="text" v-model="user.name">
      </div>

      <div class="form-filed">
        <label for="email">email:</label>
        <input id="email" type="email" v-model="user.email">
      </div>
      
      <div class="form-filed">
        <label for="phone">phone:</label>
        <input id="phone" type="tel" v-model="user.phone">
      </div>

      <div class="form-filed">
        <label for="website">website:</label>
        <input id="website" type="url" v-model="user.website">
      </div>
      
      <input type="submit" class="btn btn-primary" @click.prevent="editCard">
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { urlUsers } from '@/Server/Api.js';
import Swal from 'sweetalert2';

const user = ref({});
const route = useRoute()

const fetchAPI = async () => {
  const response = await axios.get(`${urlUsers}/${route.params.id}`);
  user.value = response.data
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
  const response = await axios.put(`${urlUsers}/${user.value.id}`,{
    id: user.value.id,
    name: user.value.name
  });

  console.log(response);
};
</script>