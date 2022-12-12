<template>
  <ModalOrderDishes v-if="showModal" @close="showModal = false" :dishes="selectOrderDishes"></ModalOrderDishes>
   <div class="user-title"></div>
    <div class="user-avatar">
        <img src="/images/team-5.jpg" alt="">
    </div>
    <div class="user-info">
        <div class="user-dolznost">Courier</div>
        <div class="user-name title-h4">Alex Ram</div>
    </div>
    <div class="title-order title-h3"> My Delivery: </div>
    <div class="check-order">
      <div class="frame" v-for="item in getData.myOrders">
        <div class="center">
          <section class="todo-cmp">
            <header class="todo-cmp__header">
              <div class="title-h6 order-filter title-thin">№ {{item.orderId}}</div>
            </header>
            <ul class="todo-cmp__list">
              <li>
                <label :for="'todo-05'+item.orderId">
                  <input :id="'todo-05'+item.orderId" type="checkbox" :checked="item.orderStatus>=7">
                  <span>Accepted</span>
                </label>
              </li>
              <li>
                <label :for="'todo-06'+item.orderId">
                  <input :id="'todo-06'+item.orderId" type="checkbox" :checked="item.orderStatus>=8" :name="item.orderId+'In the way'">
                  <span @click="setOrderStatus({order:item.orderId,status:item.orderStatus>=8?6:7})">In the way</span>
                </label>
              </li>
              <li>
                <label :for="'todo-07'+item.orderId">
                  <input :id="'todo-07'+item.orderId" type="checkbox" :checked="item.orderStatus>=9" :name="item.orderId+'Delivered'">
                  <span @click="setOrderStatus({order:item.orderId,status:item.orderStatus>=9?7:8})">Delivered</span>
                </label>
              </li>
            </ul>
            <button class="button button-size-small button-style-outline button-complete" @click="setOrderStatus({order:item.orderId,status:8})">Complete</button><br>
            <button class="button button-size-small button-style-outline button-complete" @click="selectOrderDishes=item.dishes; showModal = true">Details</button>
          </section>
        </div>
      </div>
    </div>
    <div class="title-order title-h3"> Delivery: </div>
    <div class="check-order">
      <div class="frame" v-for="item in getData.freeOrders">
        <div class="center">
          <section class="todo-cmp">
            <header class="todo-cmp__header">
              <div class="title-h6 order-filter title-thin">№ {{item.orderId}}</div>
            </header>
            <button class="button button-size-small button-style-outline button-complete" @click="setOrderStatus({order:item.orderId,status:6})">To accept</button>
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
  name: "UserPageCourier",
  data(){
    return{
      showModal:false,
      selectOrderDishes:[]
    }
  },
  components: {ModalOrderDishes},
  computed:{
    ...mapGetters({
      'getLoading':'OrderCourier/getLoading',
      'getData':'OrderCourier/getData',
    }),
  },
  methods:{
    ...mapMutations({
      'setLoading':'OrderCourier/setLoading',
      'setData':'OrderCourier/setData',
    }),
    ...mapActions({
      'getOrders':'OrderCourier/getOrders',
      'setOrderStatus':"OrderCourier/setOrderStatus"
    }),
  },
  mounted() {
    this.getOrders();
  }
};
</script>
<style></style>
