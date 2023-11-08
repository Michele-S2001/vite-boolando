<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import { store } from './store.js';
 
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },

  data() {
    return {
      store,
      message: 'hello vite'
    }
  },

  created() {
    axios
      .get('http://localhost:3000/products')
      .then((answer) => {
        const serverProducts = answer.data;
        this.store.products = serverProducts;
      });
  }
}

</script>

<template>
  <AppHeader/>
  <AppMain/>
  <AppFooter/>
</template>

<style lang="scss">
@use "./styles/general.scss";

</style>
