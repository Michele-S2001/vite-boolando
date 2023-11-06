<script>

export default {
  data() {
    return {
      message: 'header',
    }
  }
}

</script>

<template>
  <header class="page-header white-text">
    <nav class="container">
      <div class="row justify-space-between align-center">
        <ul class="nav-genders">
          <li class="nav-gender"><a href="#">Donna</a></li>
          <li class="nav-gender"><a href="#">Uomo</a></li>
          <li class="nav-gender"><a href="#">Bambini</a></li>
        </ul>
        
        <img class="boolean-icon" src="/img/boolean-logo.png" alt="logo">
        
        <ul class="nav-icons align-center">
          <li>
            <a href="#">
              <img class="nav-icon" src="/img/nav-icons/user-regular.svg" alt="user icon">
            </a>
          </li>
          <li>
            <a href="#">
              <img class="nav-icon" src="/img/nav-icons/heart-regular.svg" alt="user icon">
            </a>
          </li>
          <li>
            <a href="#">
              <img class="nav-icon" src="/img/nav-icons/bag-shopping-solid.svg" alt="user icon">
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