<template>
  <div>
    <div class="panel">

      <div class="panel-heading">
        <h2 class="title">Cart</h2>
      </div>

      <div class="panel-block" v-for="(c,i) in this.$cart.cart" :key="i">
        <div>{{c.product.name}}</div>
        <div>{{c.qty}} {{c.product.unit}}
        {{c.product.price}}</div>
        <div>Rp. {{(c.qty*c.product.price)}}</div>
      </div>

      <div class="panel-block title">
        <div class="is-start">Total</div>
        <div class="is-end">Rp. {{$cart.total}}</div>
      </div>
    </div>
    <!-- <h3>Delivery</h3>
    <ul>
      <li>Alamat tujuan</li>
      <li>
        <textarea width="300px"></textarea>
      </li>
      <li>
        <button>Pesan</button>
      </li>
    </ul>
    -->
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
      cart: {}
    };
  },
  computed: {}
};
</script>

