import { createPinia } from 'pinia';

const pinia = createPinia(); // Create a Pinia instance

export const useStore = pinia.createStore({
  state: () => ({
    fixed: false,
  }),
  actions: {
    setFixed(value) {
      this.fixed = value;
    },
  },
});

export default pinia;
