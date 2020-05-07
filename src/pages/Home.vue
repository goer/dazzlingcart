<template>
  <div class="container">

    <div data-role="appbar">
      <a href="#" class="brand no-hover"><h2>Narikmat.com</h2></a>
      <a href="#" class="brand">Product</a>
      <CartIcon class="right" :size="$cart.cart.length"/>
    </div>


    <Cart :cart="$cart.cart"/>


    <div v-for="(p,i) in products" :key="i" class="card">
      <div class="card-header">
        <h3 style="left">{{p.name}}</h3>
      </div>

      <div class="card-content p-2">
        <div class="img-container">
          <img :src="p.img" alt>
        </div>
      </div>
      <div class="card-footer">
        <h4>Price: {{p.price}} / {{p.unit}}</h4>
        <div class="right">
          <input type="number" data-role="spinner" style="width: 20px">
          <button class="image-button" @click="add(i)">
            <span class="mif-share icon"></span>
            <span class="caption">Add</span>
          </button>
        </div>
      </div>
    </div>

    
  </div>
</template>
<script>
import { ProductManager } from "../js/product.js";

import Cart from "../components/Cart.vue";
import CartIcon from "../components/CartIcon.vue";

const pm = new ProductManager();

export default {
  components: {
    Cart,
    CartIcon
  },
  async mounted() {
    await pm.load();
    this.products = await pm.list();
  },
  methods: {
    async add(i) {
      var p = this.products[i];
      console.log(p);
      await this.$cart.update(p);
      this.total = await this.$cart.calculate();
    }
  },
  data() {
    return {
      products: [],
      total: 0
    };
  }
};
</script>

