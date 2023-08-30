import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
    isShown: false,
  }),
  getters: {
    cartCount: (state) => state.cart.length
  },
  actions: {
    addToCart(item, count = 1) {
      item.count = count
      this.cart.push(item);
    },
    toggleCart() {
      this.isShown = !this.isShown;
    },
    increaseItemCount(id) {
      const item = this.cart.find(item => item.id === id);
      if (item) {
        item.count++;
      }
    },
    decreaseItemCount(id) {
      const item = this.cart.find(item => item.id === id);
      if (item && item.count > 1) {
        item.count--;
      }
    },
    removeItemFromCart(id) {
      const index = this.cart.findIndex(item => item.id === id);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    }
  },
});
