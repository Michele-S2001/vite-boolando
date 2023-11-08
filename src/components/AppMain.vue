<script>
import ProductCard from './ProductCard.vue';
import { store } from '../store.js';

export default {
  components: {
    ProductCard,
  },

  data() {
    return {
      store,
      message: 'main'
    }
  },
}

</script>

<template>

  <main class="page-content">
    <div class="container">
      <div class="row">
        <ProductCard v-for="(product) in store.products" :card="product"/>
      </div>
    </div>
  </main>

</template>

<style lang="scss">

.page-content {
  padding: 40px 10px;
}

</style>