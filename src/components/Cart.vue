<template>
  <div>
    <h2>Cart</h2>

    <table class="table striped">
      <tr v-for="(c,i) in this.$cart.cart" :key="i">
        <td>{{c.product.name}}</td>
        <td>{{c.qty}} {{c.product.unit}}</td>
        <td>{{c.product.price}}</td>
        <td>Rp. {{(c.qty*c.product.price)}}</td>
      </tr>
      <tr>
        <td>
          <h3>Total:</h3>
        </td>
        <td></td>
        <td></td>
        <td>
          <h3>Rp. {{$cart.total}}</h3>
        </td>
      </tr>
    </table>

    <h3>Delivery</h3>
    <ul>
      <li>Alamat tujuan</li>
      <li>
        <textarea width="300px"></textarea>
      </li>
      <li>
        <button>Pesan</button>
      </li>
    </ul>
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

