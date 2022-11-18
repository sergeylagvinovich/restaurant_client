<template>
    <div class="title-area">
        <div class="title-inner container paddings-side">
            <div class="title-h1 title-color-white text-lg-center">Menu</div>
        </div>
    </div>

    <div class="menu-section">
        <div class="menu-section-inner container paddings">
            <div class="title-h5 title-thin">Try & Discover</div>
            <div class="title-h2 divider-10">Our Dishes</div>
            <img src="/images/stars.jpg" alt="" class="stars divider-20"/>
            <div class="divider-20"></div>
        </div>
    </div>

    <div class="button-group filters-button-group">
    <button
      :class="['button-menu', activeCategory === 'All' ? 'is-checked' : '']"
      @click="activeCategory = 'All';this.getDishByType(0)"
    >
      Show All
    </button>
    <button
      :class="[
        'button-menu',
        activeCategory === 'appetizer' ? 'is-checked' : '',
      ]"
      @click="activeCategory = 'appetizer';this.getDishByType(5)"
    >
      Appetizer
    </button>
    <button
      :class="['button-menu', activeCategory === 'pasta' ? 'is-checked' : '']"
      @click="activeCategory = 'pasta';this.getDishByType(1)"
    >
      Pasta
    </button>
    <button
      :class="['button-menu', activeCategory === 'salad' ? 'is-checked' : '']"
      @click="activeCategory = 'salad';this.getDishByType(2)"
    >
      Salad
    </button>
    <button
      :class="['button-menu', activeCategory === 'seafood' ? 'is-checked' : '']"
      @click="activeCategory = 'seafood';this.getDishByType(3)"
    >
      Seafood
    </button>
    <button
      :class="['button-menu', activeCategory === 'meat' ? 'is-checked' : '']"
      @click="activeCategory = 'meat'; this.getDishByType(4)"
    >
      Meat
    </button>
  </div>
    
    <div class="menu-grid">
        <div class="menu-item" v-for="item in getTableData">
            <div class="menu-item-image">
                <img class="menu-img" :src="getPath+item.imgPath" alt="">
            </div>
            <div class="img-description">
                <div class="menu-item-name title-h5 title-thin title-color-yellow">{{item.name}}</div>
                <div class="menu-item-description divider-10 title-body">Ingridients: <br/>{{item.dishProducts.map(x=>x.productName).join(", ")}}</div>
                <div class="menu-price title-h4 title-thin title-color-yellow divider-10">${{item.price}}</div>
                <div class="menu-item-add-to-cart divider-10">
                    <div class="button button-style-flat button-size-small" @click="addToCart(item.id)">Add to Cart</div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import publicPaths from "@/store/publicPaths";
import {mapActions, mapGetters, mapMutations} from "vuex";
export default {
  name: "CatalogPage",
  data() {
    return {
      activeCategory: "All",
    };
  },
  computed:{
    getPath(){
      return publicPaths.images;
    },
    ...mapGetters({
      'getTableData':'DishModule/getTableData',
      'getLoading':'DishModule/getLoading',
    }),
  },
  methods: {
    checkActive(name) {
      return this.activeCategory === name || this.activeCategory === "All";
    },
    ...mapActions({
      'getDishByType':'DishModule/getDishesByType',
      'addToCart':'CartModule/addToCart'
    }),
    ...mapMutations({
      'setTableData':'DishModule/setTableData',
      'setLoading':'DishModule/setLoading',
      'setNewDish':'DishModule/setNewDish',
    }),
  },
  mounted() {
    this.getDishByType(0);
  }
};
</script>
<style></style>
