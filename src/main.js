import Vue from "vue";
import App from "./App.vue";
import { Cart } from "./js/cart";
import Vuex from "vuex";

var cart = new Cart();

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    cart: cart
  },
  mutations: {}
});

Vue.prototype.$cart = cart;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store: store
}).$mount("#app");
