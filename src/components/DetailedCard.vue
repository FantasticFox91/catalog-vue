<script setup>
import { computed } from 'vue';
import { useCartStore } from '../stores/cart';

const props = defineProps(['data'])
const useCart = useCartStore();

const onAddToCartButtonClick = () => {
  useCart.addToCart(props.data);
}

const isAvaliable = computed(() => {
  return useCart.cart.every((item) => item.id !== props.data.id);
});
</script>

<template>
  <div class="detailed-card">
    <img class="detailed-card__cover" :src="data.cover" :alt="data.name">
    <div class="detailed-card__info">
      <h1 class="detailed-card__name">{{ data.name }}</h1>
      <p class="detailed-card__description">{{ data.description }}</p>
      <div class="detailed-card__footer">
        <p class="detailed-card__price">{{ data.price }} ₽</p>
        <button class="detailed-card__button" :disabled="!isAvaliable" @click.prevent="onAddToCartButtonClick">Добавить в корзину</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.detailed-card {
  display: grid;
  max-width: 500px;
  margin: 0 auto;
  grid-template-columns: max-content 1fr;
  column-gap: 20px;
}

.detailed-card__info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detailed-card__name {
  margin: 0;
}

.detailed-card__footer {
  display: flex;
  margin-top: auto;
  align-items: center;
  justify-content: space-between;
}

.detailed-card__price {
  font-weight: 700;
}

.detailed-card__button {
  padding: 10px 12px;
  border: none;
  background-color: $color-white-smoke;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color $trans-default;
  
  &:hover(:disabled) {
    background-color: $color-silver;
  }
}
</style>
