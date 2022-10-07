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
      @click="activeCategory = 'All'"
    >
      Show All
    </button>
    <button
      :class="[
        'button-menu',
        activeCategory === 'appetizer' ? 'is-checked' : '',
      ]"
      @click="activeCategory = 'appetizer'"
    >
      Appetizer
    </button>
    <button
      :class="['button-menu', activeCategory === 'pasta' ? 'is-checked' : '']"
      @click="activeCategory = 'pasta'"
    >
      Pasta
    </button>
    <button
      :class="['button-menu', activeCategory === 'seafood' ? 'is-checked' : '']"
      @click="activeCategory = 'seafood'"
    >
      Seafood
    </button>
    <button
      :class="['button-menu', activeCategory === 'meat' ? 'is-checked' : '']"
      @click="activeCategory = 'meat'"
    >
      Meat
    </button>
  </div>

  <section
    id="grid-container"
    class="transitions-enabled fluid masonry js-masonry menu-grid"
  >
    <article class="pasta" v-if="checkActive('pasta')">
      <img src="images/menu-01.jpg" class="img-menu" />
    </article>
    <article class="appetizer" v-if="checkActive('appetizer')">
      <img src="images/menu-02.jpg" class="img-menu" />
    </article>
    <article class="meat" v-if="checkActive('meat')">
      <img src="images/menu-03.jpg" class="img-menu" />
    </article>
    <article class="seafood" v-if="checkActive('seafood')">
      <img src="images/menu-04.jpg" class="img-menu" />
    </article>
    <article class="meat" v-if="checkActive('meat')">
      <img src="images/menu-05.jpg" class="img-menu" />
    </article>
    <article class="pasta" v-if="checkActive('pasta')">
      <img src="images/menu-06.jpg" class="img-menu" />
    </article>
    <article class="pasta" v-if="checkActive('pasta')">
      <img src="images/menu-07.jpg" class="img-menu" />
    </article>
    <article class="seafood" v-if="checkActive('seafood')">
      <img src="images/menu-08.jpg" class="img-menu" />
    </article>
    <article class="seafood" v-if="checkActive('seafood')">
      <img src="images/menu-12.jpg" class="img-menu" />
    </article>
    <article class="meat" v-if="checkActive('meat')">
      <img src="images/menu-13.jpg" class="img-menu" />
    </article>
    <article class="meat" v-if="checkActive('meat')">
      <img src="images/menu-14.jpg" class="img-menu" />
    </article>
    <article class="appetizer" v-if="checkActive('appetizer')">
      <img src="images/menu-15.jpg" class="img-menu" />
    </article>
  </section>

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
export default {
  name: "HomePage",
  data() {
    return {
      activeCategory: "All",
    };
  },
  methods: {
    checkActive(name) {
      return this.activeCategory === name || this.activeCategory === "All";
    },
  },
};
</script>

<style></style>
