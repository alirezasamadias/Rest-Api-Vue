<template>
  <section class="container">
    <h2 class="title-sm">&copy; 2024 alireza samadi</h2>

    <nav>
      <a href="https://github.com/alirezasamadias/" class="icon-github"></a>
    </nav>
  </section>

  <ScrollUp/>
</template>

<script setup>
// Components
import ScrollUp from '../Components/Scroll-Up.vue';
</script>

<style scoped>
  .container {
    justify-content: space-between;
  }

  .icon-github {
    font-size: 32px;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      row-gap: 15px;
    }
  }
</style>