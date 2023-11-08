<script>
import ProductCard from './ProductCard.vue';
// import productsObj from '../db.json';
import { store } from '../store.js'

export default {
  components: {
    ProductCard,
  },

  data() {
    return {
      store,
      message: 'main',
      // products: productsObj.products
    }
  },

  created() {
    console.log(store);
    console.log(store.products);
  }
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