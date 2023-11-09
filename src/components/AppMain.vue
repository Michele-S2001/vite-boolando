<script>
import ProductCard from './ProductCard.vue';
import { store } from '../store.js';

export default {
  components: {
    ProductCard,
  },

  data() {
    return {
      message: 'main',
      open: false,
      currentProduct: {}
    }
  },

  methods: {
    showModal(item) {
      this.currentProduct = item;
      this.open = true;
    },

    hideModal() {
      this.open = false
      this.currentProduct = {};
    }
  },

  computed: {
    products() {
      return store.products;
    },
    productBrand() {
      return `Brand:  ${this.currentProduct.brand}`;
    },
    productDesc() {
      return `Description:  ${this.currentProduct.name}`;
    },
    productPrice() {
      return `Price:  ${this.currentProduct.price}`;
    }
  }
}

</script>

<template>

  <main class="page-content">
    <div class="container">
      <div class="row">
        <ProductCard 
        v-for="(product) in products" 
        :card="product"
        @show="showModal"
        />
      </div>
    </div>
  </main>

  <div v-if="open" class="modal-wrapper">
    <div class="modal">
      <div class="modal__header">
        <strong>info:</strong>
        <img 
        class="close-icon" 
        src="/img/generic-icons/circle-xmark-regular.svg" 
        alt="close mark"
        @click="hideModal()"
        >
      </div>
      <div class="modal__body">
        <div class="description">
          <p class="brand">{{ productBrand }}</p>
          <p class="text">{{ productDesc }}</p>
          <p class="price">{{ productPrice }} &euro;</p>
        </div>
        <!-- <div class="modal__image"></div> -->
      </div>
    </div>
  </div>

</template>

<style lang="scss">
@use '../styles/partials/variables' as *;

.page-content {
  padding: 40px 10px;
}

// modal
.modal {
  position: fixed;
  width: 100%;
  max-width: 500px;
  background-color: $white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  border-radius: 1rem;
  z-index: 30;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .close-icon {
      width: 20px;
      cursor: pointer;
    }
  }

  &__body {
    padding: 20px 10px 0 10px;
  }
}

.modal-wrapper::after {
  content: "";
  position: fixed;
  background-color: rgba($black, $alpha: 0.65);
  z-index: 20;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

</style>