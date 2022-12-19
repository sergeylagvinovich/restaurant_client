<template>
  <ModalOrderDishes v-if="showModal" @close="showModal = false" :dishes="selectOrderDishes"></ModalOrderDishes>
   <div class="user-title"></div>
    <div class="user-avatar">
        <img src="/images/team-7.jpg" alt="">
    </div>
    <div class="user-info">
        <div class="user-name title-h4">Anna Nelson</div>
    </div>
  <div class="title-order title-h3"> My orders: </div>

  <form id="msform" v-for="item in getData.myOrders">
    <ul id="progressbar">
      <li :class="[item.orderStatus>=2?'active':'']">Accepted</li>
      <li :class="[item.orderStatus>=3?'active':'']">Start</li>
      <li :class="[item.orderStatus>=4?'active':'']">Preparation</li>
      <li :class="[item.orderStatus>=5?'active':'']">In process</li>
      <li :class="[item.orderStatus>=6?'active':'']">Done</li>
      <li :class="[item.orderStatus>=7?'active':'']">In the way</li>
      <li :class="[item.orderStatus>=8?'active':'']">Delivered</li>
    </ul>

    <fieldset>
      <div class="fs-title title-h4">Your order is accepted...</div>
    </fieldset>
    <fieldset>
      <div class="fs-title title-h4">Your order is being prepared...</div>
    </fieldset>
    <fieldset>
      <div class="fs-title title-h4">Your order has been delivered to the courier...</div>
    </fieldset>
    <fieldset>
      <div class="fs-title title-h4">Your order has been delivered!</div>
    </fieldset>
  </form>

  <div class="title-order title-h3"> Ending orders: </div>

  <div class="check-order">
    <div class="frame" v-for="item in getData.freeOrders">
      <div class="center">
        <section class="todo-cmp">
          <header class="todo-cmp__header">
            <div class="title-h6 order-filter title-thin">№ {{item.orderId}}</div>
          </header>
          <button class="button button-size-small button-style-outline button-complete" @click="selectOrderDishes=item.dishes; showModal = true">Details</button>
        </section>
      </div>
    </div>
  </div>

</template>
<script>
import ModalOrderDishes from "@/components/ModalOrderDishes";
import {mapActions, mapGetters, mapMutations} from "vuex";
export default {
  name: "UserPageUser",
  data(){
    return{
      showModal:false,
      selectOrderDishes:[]
    }
  },
  components: {ModalOrderDishes},
  computed:{
    ...mapGetters({
      'getLoading':'OrderUser/getLoading',
      'getData':'OrderUser/getData',
    }),
  },
  methods:{
    ...mapMutations({
      'setLoading':'OrderUser/setLoading',
      'setData':'OrderUser/setData',
    }),
    ...mapActions({
      'getOrders':'OrderUser/getOrders',
    }),
  },
  mounted() {
    this.getOrders();
  }
};
</script>
<style></style>
