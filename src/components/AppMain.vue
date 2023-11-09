<script>
import ProductCard from './ProductCard.vue';
import { store } from '../store.js';

export default {
  components: {
    ProductCard,
  },

  data() {
    return {
      message: 'main'
    }
  },

  computed: {
    products() {
      return store.products
    }
  }
}

</script>

<template>

  <main class="page-content">
    <div class="container">
      <div class="row">
        <ProductCard v-for="(product) in products" :card="product"/>
      </div>
    </div>
  </main>

</template>

<style lang="scss">

.page-content {
  padding: 40px 10px;
}

</style>