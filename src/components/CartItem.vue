<script setup>
import { useCartStore } from '../stores/cart';
import IconCross from './icons/IconCross.vue';

const props = defineProps(['item']);
const useCart = useCartStore();

const onIncreaseItemCountButtonClick = (id) => {
  useCart.increaseItemCount(id);
}

const onDecreaseItemCountButtonClick = (id) => {
  useCart.decreaseItemCount(id);
}

const onDeleteButtonClick = (id, e) => {
  e.stopPropagation();
  useCart.removeItemFromCart(id)
}
</script>

<template>
  <p class="cart__name">{{ item.name }}</p>
  <div class="counter">
    <button class="counter__button counter__button--decrease" @click="onDecreaseItemCountButtonClick(item.id)" :disabled="item.count === 1">
      <span class="visually-hidden">Уменьшить</span>
      -
    </button>
    <span class="counter__count">{{ item.count }}</span>
    <button class="counter__button counter__button--increase" @click="onIncreaseItemCountButtonClick(item.id)" :disabled="item.count === 10">
      <span class="visually-hidden">Увеличить</span>
      +
    </button>
  </div>
  <p class="cart__price">{{ item.price * item.count }} ₽</p>
  <button class="cart__delete-button" type="button" @click="onDeleteButtonClick(item.id, $event)">
    <span class="visually-hidden">Удалить</span>
    <IconCross />
  </button>
</template>

<style lang="scss">
@import '../assets/scss/variables.scss';

.cart__item {
  display: grid;
  grid-template-columns: 4fr repeat(3 ,1fr);
  align-items: center;
  justify-content: center;
}

.cart__name {
  justify-self: flex-start;
}

.counter {
  display: flex;
  align-items: center;
}

.counter__count {
  width: 50px;
}

.counter__button {
  display: flex;
  width: 20px;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: $color-transparent;
  cursor: pointer;
}

.cart__delete-button {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0;
  border: none;
  background-color: $color-transparent;
  cursor: pointer;
}
</style>
