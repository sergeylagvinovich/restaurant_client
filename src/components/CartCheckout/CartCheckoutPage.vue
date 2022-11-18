<template>
    <div class="title-area">
        <div class="title-inner container paddings-side">
            <div class="title-h1 title-color-white text-lg-center">Cart</div>
        </div>
    </div>

    <div class="section-cart">
        <div class="shopping-cart container">

            <div class="column-labels">
            <label class="product-image">Image</label>
            <label class="product-details">Product</label>
            <label class="product-price">Price</label>
            <label class="product-quantity">Quantity</label>
            <label class="product-removal">Remove</label>
            <label class="product-line-price">Total</label>
            </div>
        
            <div class="product" v-for="item in getTableData.cartDishes" v-if="getTableData!=null">
                <div class="product-image">
                    <img :src="getPath+item.imgPath">
                </div>
                <div class="product-details">
                    <div class="product-title">{{item.name}}</div>
                </div>
                <div class="product-price">{{item.price}}</div>
                <div class="product-quantity">
                    <input type="number" v-model="item.count" min="1">
                </div>
                <div class="product-removal">
                    <div>
                        <a class="remove-product" href="#">Remove</a>
                    </div>
                </div>
                <div class="product-line-price">{{(item.price*item.count).toFixed(2)}}</div>
            </div>
        
            <div class="totals">
            <div class="totals-item">
                <label>Subtotal</label>
                <div class="totals-value" id="cart-subtotal">{{getTotal}}</div>
            </div>
            <div class="totals-item">
                <label>Tax (5%)</label>
                <div class="totals-value" id="cart-tax">3.60</div>
            </div>
            <div class="totals-item">
                <label>Shipping</label>
                <div class="totals-value" id="cart-shipping">15.00</div>
            </div>
            <div class="totals-item totals-item-total">
                <label>Grand Total</label>
                <div class="totals-value" id="cart-total">{{getFinal}}</div>
            </div>
            </div>
        </div>
    </div>

    <div class="checkout-title">
        <div class="container paddings-side">
            <div class="title-h2 title-color-white text-lg-center">Checkout</div>
        </div>
    </div>

    <div class="section-checkout">
        <div class="shopping-checkout container">
            <div class="contact-form-main-wrapper">
                <div class="contact-form-form-wrapper">
                <form action="" method="POST">
                    <div class="contact-form-mb-5">
                        <label for="name" class="contact-form-form-label"> Full Name </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            v-model="userInfo.userName"
                            placeholder="Full Name"
                            class="contact-form-form-input"
                        />
                    </div>
                    <div class="contact-form-mb-5">
                        <label for="phone" class="contact-form-form-label"> Phone Number </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            v-model="userInfo.phone"
                            placeholder="Enter your phone number"
                            class="contact-form-form-input"
                        />
                    </div>
                    <div class="contact-form-mb-5">
                        <label for="email" class="contact-form-form-label"> Email Address </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            v-model="userInfo.email"
                            placeholder="Enter your email"
                            class="contact-form-form-input"
                        />
                    </div>
                    <div class="flex flex-wrap contact-form--mx-3">
                        <div class="w-full sm:w-half contact-form-px-3">
                            <div class="contact-form-mb-5 w-full">
                            <label for="date" class="contact-form-form-label"> Date </label>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                class="contact-form-form-input"
                            />
                            </div>
                        </div>
                        <div class="w-full sm:w-half contact-form-px-3">
                            <div class="contact-form-mb-5">
                            <label for="time" class="contact-form-form-label"> Time </label>
                            <input
                                type="time"
                                name="time"
                                id="time"
                                class="contact-form-form-input"
                            />
                            </div>
                        </div>
                    </div>
                    <div class="contact-form-mb-5 contact-form-pt-3">
                        <label class="contact-form-form-label contact-form-form-label">
                          Address Details
                        </label>
                    </div>


                    <div class="contact-form-mb-5">
                        <input
                            type="text"
                            name="city"
                            id="city"
                            v-model="userInfo.address"
                            placeholder="Enter address"
                            class="contact-form-form-input"
                            />
                    </div>
                    <div>
                        <button class="contact-form-btn" @click.prevent="toOrder">ORDER</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import publicPaths from "@/store/publicPaths";

export default {
  name: "CartCheckoutPage",
  computed:{
    userInfo:{
      get(){
        let user = {
          userName:null,
          email:null,
          phone:null,
          address:null,
        }
        return this.getUserInfo!==null?this.getUserInfo:user;
      },
      set(value){
        this.setUserInfo(value);
      }
    },
    getPath(){
      return publicPaths.images;
    },
    getFinal(){
      let final = parseFloat(this.getTotal)+15+3.6;
      return final.toFixed(2);
    },
    getTotal(){
      let arr = this.getTableData.cartDishes;
      if(arr==undefined)
        return 0;
      let total = 0;
      for (let i = 0; i < arr.length; i++) {
        total+=arr[i].price*arr[i].count;
      }
      return total.toFixed(2);
    },
    ...mapGetters({
      'getTableData':'CartModule/getTableData',
      'getUserInfo':'CartModule/getUserInfo',
    }),
  },
  methods:{
    ...mapActions({
      "getCard":'CartModule/getCard',
      "toOrder":'CartModule/toOrder'
    }),
    ...mapMutations({
      'setTableData':'CartModule/setTableData',
      'setUserInfo':'CartModule/setUserInfo'
    }),
  },
  mounted() {
    this.getCard();
  }
};
</script>
<style></style>
