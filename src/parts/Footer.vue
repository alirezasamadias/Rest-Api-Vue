<template>
  <section class="container">
    <h2 class="title-sm">&copy; 2024 amir dabbaghiyan</h2>

    <nav>
      <a href="https://github.com/alirezasamadias/" class="social-icon icon-github"></a>
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
  width: min(90%,1250px);
  justify-content: space-between;
}

.social-icon {
  font-size: 32px;
  transition-duration: 0.25s;
}

.social-icon:hover {
  transform: scale(1.2);
}

@media (max-width:600px) {
  .container {
    flex-direction: column;
    row-gap: 10px;
  }
}
</style>