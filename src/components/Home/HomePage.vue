<template>
  <section class="hero">
    <div class="hero-inner paddings-side">
      <div class="title-xx-large">Benvenuti</div>
      <div class="title-h1 title-color-white">Alla Grotta!</div>
      <div class="title-h5 title-color-white title-thin divider-10">
        In our Restaurant we bring you a little piece of Italy.
      </div>
      <div class="button-position-center divider-20">
        <a class="button button-size-small button-style-outline" href="#"
          >Reserve a table</a
        >
      </div>
    </div>
  </section>

  <section class="reinterpreted">
    <div class="reinterpreted-inner container paddings">
      <div class="title-x-large">Reinterpreted</div>
      <div class="title-h2 divider-10">True Italian Cuisine</div>
      <img src="/images/stars.jpg" alt="" class="stars divider-20" />
      <div class="divider-20"></div>
      <div class="title-body max-width">
        Our daily challenge: highest quality ingredients according to
        traditional recipes freshly interpreted and served with a lot of passion
        for the guest! Enjoy fine Mediterranean cuisine and exquisite service.
        We are very pleased to welcome you as guests in our restaurant.
      </div>
    </div>
  </section>

  <section class="provision">
    <div class="provision-inner container paddings paddings-side">
      <div class="provision-item">
        <div class="title-h5 title-color-white">100% Fresh Products</div>
        <div class="title-body title-color-grey divider-30">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor
        </div>
      </div>
      <div class="provision-item">
        <div class="title-h5 title-color-white">Delicious Food</div>
        <div class="title-body title-color-grey divider-30">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor
        </div>
      </div>
      <div class="provision-item">
        <div class="title-h5 title-color-white">Friendly Staff</div>
        <div class="title-body title-color-grey divider-30">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor
        </div>
      </div>
      <div class="provision-item">
        <div class="title-h5 title-color-white">Relaxing Atmosphere</div>
        <div class="title-body title-color-grey divider-30">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor
        </div>
      </div>
    </div>
  </section>

  <section class="discover">
    <div class="discover-inner container paddings">
      <div class="title-x-large">Discover</div>
      <div class="title-h2 divider-10">Popular Menu</div>
      <img src="/images/stars.jpg" alt="" class="stars divider-20" />
      <div class="divider-20"></div>
    </div>
  </section>

  <div class="button-group filters-button-group">
    <button
      :class="['button-menu', activeCategory === 'All' ? 'is-checked' : '']"
      @click="activeCategory = 'All'; this.getDishByType(0)"
    >
      Show All
    </button>
    <button
      :class="[
        'button-menu',
        activeCategory === 'appetizer' ? 'is-checked' : '',
      ]"
      @click="activeCategory = 'appetizer'; this.getDishByType(1)"
    >
      Appetizer
    </button>
    <button
      :class="['button-menu', activeCategory === 'pasta' ? 'is-checked' : '']"
      @click="activeCategory = 'pasta'; this.getDishByType(2)"
    >
      Pasta
    </button>
    <button
      :class="['button-menu', activeCategory === 'seafood' ? 'is-checked' : '']"
      @click="activeCategory = 'seafood'; this.getDishByType(3)"
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
                <div class="menu-item-description divider-10">Ingridients: <br>  {{item.dishProducts.map(x=>x.productName).join(", ")}}</div>
                <div class="menu-item-add-to-cart divider-30">
                    <div class="button button-style-flat button-size-small" @click="addToCart(item.id)">Add to Cart</div>
                </div>
            </div>
        </div>
    </div>
  <section class="book-table">
    <div class="book-table-inner container paddings">
      <div class="title-x-large">Reservation</div>
      <div class="title-h2 divider-10">Book your table</div>
      <img src="/images/stars.jpg" alt="" class="stars divider-20" />
      <div class="divider-20"></div>

      <div class="contact-form-main-wrapper">
        <div class="contact-form-form-wrapper">
          <form action="https://contact-form.com/s/FORM_ID" method="POST">
            <div class="contact-form-mb-5">
              <label for="name" class="contact-form-form-label">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                class="contact-form-form-input"
              />
            </div>
            <div class="contact-form-mb-5">
              <label for="phone" class="contact-form-form-label">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                class="contact-form-form-input"
              />
            </div>
            <div class="contact-form-mb-5">
              <label for="email" class="contact-form-form-label">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                class="contact-form-form-input"
              />
            </div>
            <div class="flex flex-wrap contact-form--mx-3">
              <div class="w-full sm:w-half contact-form-px-3">
                <div class="contact-form-mb-5 w-full">
                  <label for="date" class="contact-form-form-label">
                    Date
                  </label>
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
                  <label for="time" class="contact-form-form-label">
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    class="contact-form-form-input"
                  />
                </div>
              </div>
            </div>
            <div>
              <button class="contact-form-btn">Book Appointment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <div class="container">
    <img class="bottom-img" src="/images/home-5.png" alt="" />
  </div>
</template>

<script>
import publicPaths from "@/store/publicPaths";
import {mapActions, mapGetters, mapMutations} from "vuex";
export default {
  name: "HomePage",
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
      'testAuth':'DishModule/testAuth',
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
