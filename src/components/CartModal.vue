<script setup>
import { onUpdated, ref, computed } from 'vue';
import { useCartStore } from '../stores/cart';
import CartList from './CartList.vue';

const props = defineProps(['modelValue']);
const useCart = useCartStore();
const modalRef = ref(null);
const modalContainerRef = ref(null);
const cartItems = computed(() => useCart.cart)

const onOverlayClick = (e) => {
  if (!e.target.closest('.modal__container') && !e.target.closest('.cart-item')) {
    document.body.classList.remove('scroll-lock');
    useCart.toggleCart();
  }
}

const preparePrintableContent = () => {
  let content = 'Корзина:\n\n';
  
  for (const item of useCart.cart) {
    content += `${item.name} - Количество: ${item.count} - Цена: ${item.price * item.count}\n`;
  }

  content += `Общая цена ${useCart.cart.reduce((acc, item) => acc + item.price * item.count, 0)}`
  
  return content;
};

const printCartItems = () => {
  const printableContent = preparePrintableContent();
  
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`<pre>${printableContent}</pre>`);
  printWindow.document.close();
  printWindow.print();
};

onUpdated(() => {
  if (props.modelValue) {
    document.body.classList.add('scroll-lock');
    if (modalRef.value) {
      modalRef.value.style.top = `${window.scrollY}px`;
    }
  }
})

</script>

<template>
  <div class="modal cart" v-show="modelValue" ref="modalRef" @click="onOverlayClick">
    <div class="modal__container" ref="modalContainerRef">
      <div class="modal__content">
        <p class="modal__heading">Корзина</p>
        <p class="modal__subheading" v-if="cartItems.length === 0">Пока что пусто</p>
        <CartList v-else :cartItems="cartItems" />
        <button class="modal__button" @click="printCartItems" :disabled="cartItems.length === 0">Распечатать позиции</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/scss/variables.scss';
.modal {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal__container {
  display: flex;
  max-width: 600px;
  flex-direction: column;
  background-color: $color-default-white;
  box-shadow: 0px 7px 15px 0px rgba(0, 1, 1, 0.15);
}

.modal__content {
  display: flex;
  padding: 40px 42px 0;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 22px;
  gap: 40px;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
}

.modal__heading {
  margin: 0;
  font-size: 24px;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
}

.modal__subheading {
  margin: 0;
  text-transform: uppercase;
}

.modal__background {
  display: flex;
  padding: 20px;
  background-color: $color-white-smoke;
}

.modal__button {
  padding: 10px 12px;
  border: none;
  background-color: $color-white-smoke;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color $trans-default;
  
  &:hover:not(:disabled) {
    background-color: $color-silver;
  }
}
</style>
