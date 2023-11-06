<script>
import ProductCard from './ProductCard.vue';

export default {
  components: {
    ProductCard,
  },

  data() {
    return {
      message: 'main',
    }
  }
}

</script>

<template>

  <main class="page-content">
    <div class="container">
      <div class="row">
        <ProductCard v-for="n in 6"/>
      </div>
    </div>
  </main>

</template>

<style lang="scss">

.page-content {
  padding: 40px 10px;
}

</style>