<script>
import ProductCard from './ProductCard.vue';

export default {
  components: {
    ProductCard,
  },

  data() {
    return {
      message: 'main',
      images: [
        {
          img: '/img/1.webp',
          hoveredImg: '/img/1b.webp'
        },
        {
          img: '/img/2.webp',
          hoveredImg: '/img/2b.webp'
        },
        {
          img: '/img/3.webp',
          hoveredImg: '/img/3b.webp'
        },
        {
          img: '/img/4.webp',
          hoveredImg: '/img/4b.webp'
        },
        {
          img: '/img/5.webp',
          hoveredImg: '/img/5b.webp'
        },
        {
          img: '/img/6.webp',
          hoveredImg: '/img/6b.webp'
        }
      ]
    }
  }
}

</script>

<template>

  <main class="page-content">
    <div class="container">
      <div class="row">
        <ProductCard v-for="card in images"/>
        <!-- <ProductCard v-for="card in images" :thumbnail-one="card.img" :thumbnail-two="card.hoveredImg"/> -->
      </div>
    </div>
  </main>

</template>

<style lang="scss">

.page-content {
  padding: 40px 10px;
}

</style>