<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  components: {
    Header,
    Main,
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
  <Main />
</template>

<style lang="scss">
@use "./styles/general.scss";

</style>
