<script>

export default {
  data() {
    return {
      message: 'header',
      genders: [
        'Donna',
        'Uomo',
        'Bambini'
      ],
      socialIcons: [
        '/img/nav-icons/user-regular.svg',
        '/img/nav-icons/heart-regular.svg',
        '/img/nav-icons/bag-shopping-solid.svg'
      ]
    }
  }
}

</script>

<template>
  <header class="page-header white-text">
    <nav class="container">
      <div class="row justify-space-between align-center">
        
        <ul class="nav-genders">
          <li v-for="(gender, i) in genders" class="nav-gender" :key="i">
            <a href="#">{{ gender }}</a>
          </li>
        </ul>
        
        <img class="boolean-icon" src="/img/boolean-logo.png" alt="logo">
        
        <ul class="nav-icons align-center">
          <li v-for="(iconPath, index) in socialIcons" :key="index">
            <a href="#">
              <img class="nav-icon" :src="iconPath" alt="user icon">
            </a>
          </li>
        </ul>

      </div>
    </nav>
  </header>
</template>


<style lang="scss">
@use '../styles/partials/variables' as *;

.page-header {
  background-color: $orange;
  padding: 20px 10px;
  font-weight: 700;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  .boolean-icon {
    max-width: 130px;
  }
}

.nav-genders, .nav-icons {
  display: flex;
  gap: 10px;
}

.nav-icons {
  .nav-icon {
    width: 30px;
    height: 20px;
    filter: invert(100%);
  }
}

</style>