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
    <div class="title-order title-h3"> Orders: </div>
    <div class="check-order">
        <div class="frame" v-for="item in getData.freeOrders">
            <div class="center">
                <section class="todo-cmp">
                    <header class="todo-cmp__header">
                        <div class="title-h6 order-filter title-thin">№ {{item.orderId}}</div>
                    </header>
                    <button class="button button-size-small button-style-outline button-complete" @click="setOrderStatus({order:item.orderId,status:9})">To accept</button>
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
      'getLoading':'OrderCallCenter/getLoading',
      'getData':'OrderCallCenter/getData',
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
      'setLoading':'OrderCallCenter/setLoading',
      'setData':'OrderCallCenter/setData',
    }),
    ...mapActions({
      'getOrders':'OrderCallCenter/getOrders',
      'setOrderStatus':"OrderCallCenter/setOrderStatus"
    }),
  },
  mounted() {
    this.getOrders();
  }
};
</script>
<style></style>
