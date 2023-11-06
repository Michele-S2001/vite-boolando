<script>

export default {
  data() {
    return {
      message: 'Footer',
    }
  }
}

</script>

<template>

  <footer class="page-footer white-text">
    <div class="container">
      <div class="row justify-space-between">
        <div class="col">
          <div class="footer-info-section">
            <h4>Boolando s.r.l.</h4>
            <ul class="footer-info-links">
              <li class="footer-info-link">
                <a href="#">Informazioni legali</a>
              </li>
              <li class="footer-info-link">
                <a href="#">Informativa sulla privicy</a>
              </li>
              <li class="footer-info-link">
                <a href="#">Diritto di recesso</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col">
          <div class="footer-social-section">
            <h4>Trovaci anche su</h4>
            <div class="footer-social-icons">
              <a href="#">
                <img class="footer-social-icon" src="/img/social-icons/square-x-twitter.svg" alt="social icon">
              </a>
              <a href="#">
                <img class="footer-social-icon" src="/img/social-icons/square-facebook.svg" alt="social icon">
              </a>
              <a href="#">
                <img class="footer-social-icon" src="/img/social-icons/square-instagram.svg" alt="social icon">
              </a>
              <a href="#">
                <img class="footer-social-icon" src="/img/social-icons/square-pinterest.svg" alt="social icon">
              </a>
              <a href="#">
                <img class="footer-social-icon" src="/img/social-icons/square-youtube.svg" alt="social icon">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

</template>

<style lang="scss">
@use '../styles/partials/variables' as *;

.page-footer {
  background-color: $grey;
  padding: 20px 10px;

  h4 {
    margin-bottom: 10px;
  }

  .footer-info-links {
    display: flex;
    font-size: 12px;

    .footer-info-link:not(:last-child) > a {
      padding-right: 15px;
    }
  }

  .footer-social-section {
    .footer-social-icons {
      text-align: center;
      font-size: 20px;

      a:not(:last-child) {
        margin-right: 5px;
      }

      .footer-social-icon {
        width: 24px;
        aspect-ratio: 1;
        filter: invert(100%);
      }

    }
  }
}
</style>