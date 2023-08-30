<script setup>
import CartItem from './CartItem.vue';
const props = defineProps(['cartItems']);
</script>

<template>
  <ul class="cart__list">
    <li class="cart__item" v-for="item in cartItems" :key="item.id">
      <CartItem :item="item" />
    </li>
  </ul>
</template>

<style>
.cart__list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
