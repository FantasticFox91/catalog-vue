<script setup>
const props = defineProps(['data'])
</script>

<template>
  <RouterLink class="item-card" :to="`/item/${data.id}`" >
    <img class="item-card__cover" :src="data.cover" :alt="data.name">
    <div class="item-card__description">
      <p class="item-card__name">{{ data.name }}</p>
      <p class="item-card__price">{{ data.price }} ₽</p>
    </div>
  </RouterLink>
</template>

<style lang="scss">
@import '../assets/scss/variables.scss';

.item-card {
  display: flex;
  width: 200px;
  height: 288px;
  margin: 0 auto;
  padding: 16px;
  max-width: 200px;
  flex-direction: column;
  align-items: center;
  background-color: $color-white-smoke;
  border-radius: 10px;
  gap: 20px;
  transition: box-shadow $trans-default;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  }
}

.item-card__description {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  justify-content: space-between;
}

.item-card__price {
  margin: 0;
  text-align: right;
}

.item-card__name {
  margin: 0;
}
</style>
