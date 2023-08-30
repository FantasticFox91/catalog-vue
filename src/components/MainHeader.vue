<script setup>
import IconCart from './icons/IconCart.vue';
import { useCartStore } from '../stores/cart';

const useCart = useCartStore();
const onOpenCartButtonClick = () => {
  useCart.toggleCart();
}
</script>

<template>
  <header class="header">
    <RouterLink to="/">
      <img width="64" height="64" src="https://img.icons8.com/pastel-glyph/64/drink-to-go--v1.png" alt="drink-to-go--v1"/>
    </RouterLink>
    <button class="header__cart" @click="onOpenCartButtonClick">
      <IconCart  />
      <span class="visually-hidden">Корзина</span>
      <span v-if="useCart.cartCount > 0" class="header__count">{{ useCart.cartCount }}</span>
    </button>
  </header>
</template>

<style lang="scss">
@import '../assets/scss/variables.scss';

.header {
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;
  align-items: center;
}

.header__cart {
  position: relative;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.header__count {
  position: absolute;
  top: 0;
  right: -10px;
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  background-color: $color-default-white;
  font-size: 12px;
  line-height: normal;
  border: 1px solid $color-default-black;
  border-radius: 50%;
}
</style>
