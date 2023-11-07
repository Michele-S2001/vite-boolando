<script>
import ProductCard from './ProductCard.vue';
import productsObj from '../db.json';

export default {
  components: {
    ProductCard,
  },

  data() {
    return {
      message: 'main',
      products: productsObj.products
    }
  },

  mounted() {
    console.log(this.products);
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