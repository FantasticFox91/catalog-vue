<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import { useMainStore } from '../stores/store';
import DetailedCard from '../components/DetailedCard.vue'

const useStore = useMainStore();
const route = useRoute()

const item = computed(() => {
  return useStore.productData.filter((data) => data.id === Number(route.params.id))[0]
})
</script>

<template>
  <main>
    <DetailedCard :data="item" />
  </main>
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
  
  &:hover {
    background-color: $color-silver;
  }
}
</style>
