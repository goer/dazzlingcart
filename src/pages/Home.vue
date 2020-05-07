<template>
  <div >
    <!-- <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
            width="112"
            height="28"
          >
        </a>
        
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>-->
    <nav class="panel">
      
      <div class="panel-heading">
       <div> 
        <p>NARIKMAT.FOOD</p>
      </div>
      <div class="is-right">
        <button class="is-primary is-medium">Cart</button>
      </div>

      </div>

      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input" type="text" placeholder="Search">
          <span class="icon is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
    </nav>

    <div v-for="(p,i) in products" :key="i" class="card">
      <div class="card-header">
        <div class="card-header-title">
          <span class="text is-large">{{p.name}}</span>
        </div>
      </div>
      <div class="card-image">
        <figure class="image">
          <img :src="p.img" alt>
        </figure>
      </div>
      <div class="card-content"></div>
      <div class="card-footer">
        <div class="card-footer-item">
          <span class="is-large">Price: {{p.price}} / {{p.unit}}</span>
        </div>
        <div class="card-footer-item">
          <button class="button is-primary is-large" @click="add(i)">
            <span class="icon is-small">
              <i class="fas fa-check"></i>
            </span>
            <span>Buy</span>
          </button>
        </div>
      </div>
    </div>

    <Cart :cart="$cart.cart"/>
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

