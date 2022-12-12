<template>
    <ModalOrderDishes v-if="showModal" @close="showModal = false" :dishes="selectOrderDishes"></ModalOrderDishes>
    <div class="user-title"></div>
    <div class="user-avatar">
        <img src="/images/team-2.jpg" alt="">
    </div>
    <div class="user-info">
        <div class="user-dolznost">Master Shef</div>
        <div class="user-name title-h4">Emil Anderson</div>
    </div>
    <div class="title-order title-h3"> My orders: </div>
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
                  <input :id="'todo-05'+item.orderId" type="checkbox" :checked="item.orderStatus>=3">
                  <span>Start</span>
                </label>
              </li>
              <li>
                <label :for="'todo-06'+item.orderId">
                  <input :id="'todo-06'+item.orderId" type="checkbox" :checked="item.orderStatus>=4" :name="item.orderId+'Preparation'">
                  <span @click="setOrderStatus({order:item.orderId,status:item.orderStatus>=5?2:3})">Preparation</span>
                </label>
              </li>
              <li>
                <label :for="'todo-07'+item.orderId">
                  <input :id="'todo-07'+item.orderId" type="checkbox" :checked="item.orderStatus>=5" :name="item.orderId+'In process'">
                  <span @click="setOrderStatus({order:item.orderId,status:item.orderStatus>=5?3:4})">In process</span>
                </label>
              </li>
              <li>
                <label :for="'todo-08'+item.orderId">
                  <input :id="'todo-08'+item.orderId" type="checkbox" :checked="item.orderStatus>=6" :name="item.orderId+'Done'">
                  <span @click="setOrderStatus({order:item.orderId,status:item.orderStatus>=6?4:5})">Done</span>
                </label>
              </li>
            </ul>
            <button class="button button-size-small button-style-outline button-complete" @click="setOrderStatus({order:item.orderId,status:5})">Complete</button><br>
            <button class="button button-size-small button-style-outline button-complete" @click="selectOrderDishes=item.dishes; showModal = true">Details</button>
          </section>
        </div>
      </div>
    </div>
    <div class="title-order title-h3"> Orders: </div>
    <div class="check-order">
        <div class="frame" v-for="item in getData.freeOrders">
            <div class="center">
                <section class="todo-cmp">
                    <header class="todo-cmp__header">
                        <div class="title-h6 order-filter title-thin">№ {{item.orderId}}</div>
                    </header>
                    <button class="button button-size-small button-style-outline button-complete" @click="setOrderStatus({order:item.orderId,status:2})">To accept</button>
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
  name: "UserPageShef",
  components: {ModalOrderDishes},
  data(){
    return{
      showModal:false,
      selectOrderDishes:[]
    }
  },
  computed:{
    ...mapGetters({
      'getLoading':'OrderShef/getLoading',
      'getData':'OrderShef/getData',
    }),
  },
  methods:{
    checkStatus(item, status){
      console.log(item);
      let data = {
        order:item.orderId,
        status:status,
      }
      console.log(data);
      this.setOrderStatus(data);
    },
    ...mapMutations({
      'setLoading':'OrderShef/setLoading',
      'setData':'OrderShef/setData',
    }),
    ...mapActions({
      'getOrders':'OrderShef/getOrders',
      'setOrderStatus':"OrderShef/setOrderStatus"
    }),
  },
  mounted() {
    this.getOrders();
  }
};
</script>
<style></style>
