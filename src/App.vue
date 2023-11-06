<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },

  data() {
    return {
      message: 'hello vite'
    }
  },
}

</script>

<template>
  <Header />
  <!-- <h2>{{ message }}</h2> -->

</template>

<style lang="scss">
@use "./styles/general.scss";

</style>
