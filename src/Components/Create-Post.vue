<template>
  <h2 class="title-md">create post</h2>
  
  <div class="container container-sm">
    <form class="card">
      <div class="form-filed">
        <label for="title">title:</label>
        <input id="title" type="text">
      </div>

      <div class="form-filed">
        <label for="body">body:</label>
        <textarea rows="6" id="body"></textarea>
      </div>
      
      <input type="submit" class="btn btn-primary">
    </form>
  </div>
</template>

<script setup>
</script>