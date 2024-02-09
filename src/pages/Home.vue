<template>
  <div class="hero container">
    <picture>
      <source media="(max-width:600px)" srcset="../assets/Images/Hero-Horizontal.jpg">
      
      <img src="../assets/Images/Hero-Vertical.jpg" alt="rest api">
    </picture>
  </div>
</template>

<style scoped>
.hero img {
  object-fit: contain;
  max-height: 50vh;
}

/* Responsive */
@media (max-width:600px) {
  .hero img {
    max-height: 55vh;
  }
}
</style>