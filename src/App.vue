<script setup>
import MainHeader from './components/MainHeader.vue';
import CartModal from './components/CartModal.vue';
import { useCartStore } from './stores/cart';
import { computed } from 'vue';

const useCart = useCartStore();
const isModalShown = computed(() => useCart.isShown)
</script>

<template>
  <MainHeader />
  <RouterView />
  <Teleport to="body">
    <CartModal v-model="isModalShown"/>
  </Teleport>
</template>

<style scoped>

</style>
