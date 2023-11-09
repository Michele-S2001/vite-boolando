<script>

export default {
  emits: ['show'],
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      message: 'product card',
    }
  },
  methods: {
    toggleInFavorites() {
      this.card.isInFavorites = !this.card.isInFavorites
    },

    discount() {
      const discount = (100 - Math.abs(parseInt(this.card.badges.find((element)=> {
        return element.type === 'discount'
      }).value))) / 100;
      const discountedPrice = (this.card.price * discount).toFixed(2);
      return discountedPrice
    },

    cardInfo() {
      this.$emit('show', this.card)
    }
  },
}

</script>

<template>
  
  <div class="col col-4">
    <div class="product-card">
      <img :src="card.frontImage" alt="A man with white Levi's t-shirt">
      <img class="product-image-hover" :src="card.backImage" alt="A man with white Levi's t-shirt and a jacket">
      <div class="tag-wrapper">
        <div 
          v-for="badge in card.badges"
          class="product-sticker"
          :class="badge.type"> 
          {{ badge.value }}
        </div>
      </div>
      <div @click="toggleInFavorites()"
       class="product-sticker like-button"
       :class="{favorites: card.isInFavorites}">
       &hearts; 
      </div>
      <span @click="cardInfo">
        <img class="info" src="/img/generic-icons/circle-info-solid.svg" alt="info icon">
      </span>  
    </div>
    <div class="product-description">
      <span class="brand">{{ card.brand }}</span>   
      <strong class="label">{{ card.name }}</strong>
      <div class="prices">
        <strong v-if="card.badges.find((el) => el.type === 'discount')" class="price">
          {{ discount() }}
        </strong>
        <span class="price">{{ card.price }} &euro;</span>
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

  .info {
    width: 24px;
    aspect-ratio: 1;
    position: absolute;
    left: 5px;
    top: 5px;
    cursor: pointer;
  }

  .product-sticker {
    font-weight: 700;
    padding: 3px 5px;

    &.discount {
      background-color: $red;
    }

    &.tag {
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

      &.favorites {
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