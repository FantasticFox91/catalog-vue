<script setup>
import { useMainStore } from '../stores/store';
import ItemCard from './ItemCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';

const useStore = useMainStore();
</script>

<template>
  <section class="catalog">
    <ul v-if="useStore.itemsCount < 4" class="catalog__list">
      <li class="catalog__item" v-for="item in useStore.productData.slice(0, useStore.itemsCount)" :key="item.id">
        <ItemCard :data="item" />
      </li>
    </ul>
    <div class="slider" v-else>
      <swiper :navigation="true" :modules="[Navigation]" :slidesPerView="3">
        <swiper-slide v-for="item in useStore.productData.slice(0, useStore.itemsCount)" :key="item.id">
          <ItemCard :data="item"/>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style lang="scss">
.catalog__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
  gap: 20px;
}

.catalog__item {
  display: flex;
}

.slider {
  display: flex;
  min-height: 400px;
  overflow: hidden;
}

.swiper {
  max-width: 800px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-pagination {
  top: 50%;
  width: 100%;
}

.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  display: none;
}

.swiper .swiper-button-next {
  right: 5px;
}

.swiper .swiper-button-prev {
  left: 5px;
}
</style>
