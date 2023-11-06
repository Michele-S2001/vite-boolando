<script>

export default {
  // props: ['thumbnailOne', 'thumbnailTwo'],
  data() {
    return {
      message: 'product card',
    }
  }
}

</script>

<template>

  <div class="col col-4">
    <div class="product-card">
      <img src="/img/1.webp" alt="A man with white Levi's t-shirt">
      <img class="product-image-hover" src="/img/1b.webp" alt="A man with white Levi's t-shirt and a jacket">
      <div class="tag-wrapper">
        <div class="product-sticker sales-rate"> -50% </div>
        <div class="product-sticker eco-tag"> Sostenibilità </div>
      </div>
      <div class="product-sticker like-button"> &hearts; </div>  
    </div>
    <div class="product-description">
      <span class="brand">Levi's</span>   
      <strong class="label">relaxed fit tee unisex</strong>
      <div class="prices">
        <strong class="price">14,99 &euro;</strong>
        <span class="price">29,99 &euro;</span>
      </div>
    </div>
  </div>

</template>

<style lang="scss">
@use '../styles/partials/variables' as *;

.product-card {
  position: relative;
  font-size: 10px;
  margin-bottom: 5px;

  .product-image-hover {
    position: absolute;
    top: 0;
    opacity: 0;
  }

  .tag-wrapper {
    color: $white;
    display: flex;
    position: absolute;
    gap: 5px;
    bottom: 20px;
    left: 0;
  }

  .product-sticker {
    font-weight: 700;
    padding: 3px 5px;

    &.sales-rate {
      background-color: $red;
    }

    &.eco-tag {
      background-color: $green;
    }

    &.like-button {
      position: absolute;
      top: 5px;
      right: 0;
      background-color: $white;
      padding: 0 5px;
      font-size: 30px;
      cursor: pointer;

      &:hover {
        color: $red;
      }
    }
  }
}

.product-description {
  font-size: 13px;  

  .label {
    display: block;
    text-transform: uppercase;
    font-size: 15px;
  }

  .prices {
    .price:first-child {
      color: $red;
      font-weight: 800;
      font-size: 12px;
      margin-right: 5px;
    }

    .price:nth-child(2) {
      text-decoration: line-through;
      font-size: 12px;
    }
  }
}

.col:hover .product-image-hover {
  opacity: 1;
}

</style>