<template>
<div>
  <button class="button m-1">
    <span class="mif-cart"></span>
    <span class="ml-1">My Cart</span>
    <span class="badge bg-blue fg-white">{{size}}</span>
</button>
</div>
</template>
<script>
export default {
  name: "CartIcon",
  data() {
    return {
      size: 0
    };
  },
  computed:{
    cartSize(){
      return this.$cart.cart.length
    }
  }
};
</script>
