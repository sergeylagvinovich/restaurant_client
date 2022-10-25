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
      :class="['button-menu', activeCategory === 'salad' ? 'is-checked' : '']"
      @click="activeCategory = 'salad'"
    >
      Salad
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
    
    <div class="menu-grid">
        <div class="menu-item" v-if="checkActive('pasta')">
            <div class="menu-item-image">
                <img class="menu-img" src="/images/menu-01.jpg" alt="">
            </div>
            <div class="img-description">
                <div class="menu-item-name title-h5 title-thin title-color-yellow">Pasta with mussels</div>
                <div class="menu-item-description divider-10 title-body">Ingridients: Spaghetti, mussels, cream, garlic, spices, butter, black pepper.</div>
                <div class="menu-price title-h4 title-thin title-color-yellow divider-10">$25.00</div>
                <div class="menu-item-add-to-cart divider-10">
                    <div class="button button-style-flat button-size-small">Add to Cart</div>
                </div>
            </div>
        </div>
        <div class="menu-item" v-if="checkActive('appetizer')">
            <div class="menu-item-image">
                <img class="menu-img" src="/images/menu-02.jpg" alt="">
            </div>
            <div class="img-description">
                <div class="menu-item-name title-h5 title-thin title-color-yellow">Vegetable Salad</div>
                <div class="menu-item-description divider-10 title-body">Ingridients: Red Bell pepper, yellow Bell pepper, mushrooms, tomatoes, onions, basil.</div>
                <div class="menu-price title-h4 title-thin title-color-yellow divider-10">$35.00</div>
                <div class="menu-item-add-to-cart divider-10">
                    <div class="button button-style-flat button-size-small">Add to Cart</div>
                </div>
            </div>
        </div>
        <div class="menu-item" v-if="checkActive('meat')">
            <div class="menu-item-image">
                <img class="menu-img" src="/images/menu-03.jpg" alt="">
            </div>
            <div class="img-description">
                <div class="menu-item-name title-h5 title-thin title-color-yellow">Pork steak</div>
                <div class="menu-item-description divider-10 title-body">Ingridients: Pork, sauce, bell pepper, cucumber, tomato, onion, spices.</div>
                <div class="menu-price title-h4 title-thin title-color-yellow divider-10">$40.00</div>
                <div class="menu-item-add-to-cart divider-10">
                    <div class="button button-style-flat button-size-small">Add to Cart</div>
                </div>
            </div>
        </div>
        <div class="menu-item" v-if="checkActive('seafood')">
            <div class="menu-item-image">
                <img class="menu-img" src="/images/menu-04.jpg" alt="">
            </div>
            <div class="img-description">
                <div class="menu-item-name title-h5 title-thin title-color-yellow">Salmon steak</div>
                <div class="menu-item-description divider-10 title-body">Ingridients: Salmon, signature sauce, basil, lemon, spices.</div>
                <div class="menu-price title-h4 title-thin title-color-yellow divider-10">$25.00</div>
                <div class="menu-item-add-to-cart divider-10">
                    <div class="button button-style-flat button-size-small">Add to Cart</div>
                </div>
            </div>
        </div>
        <div class="menu-item" v-if="checkActive('meat')">
            <div class="menu-item-image">
                <img class="menu-img" src="/images/menu-05.jpg" alt="">
            </div>
            <div class="img-description">
                <div class="menu-item-name title-h5 title-thin title-color-yellow">Tenderloin with Shrimp</div>
                <div class="menu-item-description divider-10 title-body">Ingridients: Beef, specialty sauce, lemon, shrimp, octopus, spices.</div>
                <div class="menu-price title-h4 title-thin title-color-yellow divider-10">$35.00</div>
                <div class="menu-item-add-to-cart divider-10">
                    <div class="button button-style-flat button-size-small">Add to Cart</div>
                </div>
            </div>
        </div>
        <div class="menu-item" v-if="checkActive('pasta')">
            <div class="menu-item-image">
                <img class="menu-img" src="/images/menu-06.jpg" alt="">
            </div>
            <div class="img-description">
                <div class="menu-item-name title-h5 title-thin title-color-yellow">Pasta with Shrimp</div>
                <div class="menu-item-description divider-10 title-body">Ingridients: Spaghetti, shrimp, mussels, cream, garlic, spices, butter, black pepper.</div>
                <div class="menu-price title-h4 title-thin title-color-yellow divider-10">$28.00</div>
                <div class="menu-item-add-to-cart divider-10">
                    <div class="button button-style-flat button-size-small">Add to Cart</div>
                </div>
            </div>
        </div>
        <div class="menu-item" v-if="checkActive('pasta')">
            <div class="menu-item-image">
                <img class="menu-img" src="/images/menu-07.jpg" alt="">
            </div>
            <div class="img-description">
                <div class="menu-item-name title-h5 title-thin title-color-yellow">Pasta with Tomatoes</div>
                <div class="menu-item-description divider-10 title-body">Ingridients: Spaghetti, tomatoes, basil, cheese, specialty sauce, spices.</div>
                <div class="menu-price title-h4 title-thin title-color-yellow divider-10">$12.00</div>
                <div class="menu-item-add-to-cart divider-10">
                    <div class="button button-style-flat button-size-small">Add to Cart</div>
                </div>
            </div>
        </div>
        <div class="menu-item" v-if="checkActive('seafood')">
            <div class="menu-item-image">
                <img class="menu-img" src="/images/menu-08.jpg" alt="">
            </div>
            <div class="img-description">
                <div class="menu-item-name title-h5 title-thin title-color-yellow">Fish in lemon sauce</div>
                <div class="menu-item-description divider-10 title-body">Ingridients: Fish, tomatoes, lemon juice, basil, spices.</div>
                <div class="menu-price title-h4 title-thin title-color-yellow divider-10">$24.99</div>
                <div class="menu-item-add-to-cart divider-10">
                    <div class="button button-style-flat button-size-small">Add to Cart</div>
                </div>
            </div>
        </div>
        <div class="menu-item" v-if="checkActive('salad')">
            <div class="menu-item-image">
                <img class="menu-img" src="/images/menu-09.jpg" alt="">
            </div>
            <div class="img-description">
                <div class="menu-item-name title-h5 title-thin title-color-yellow">Salad Caesar</div>
                <div class="menu-item-description divider-10 title-body">Ingridients: Chicken breast, tomatoes, iceberg, mozzarella, mustard, crackers, spices.</div>
                <div class="menu-price title-h4 title-thin title-color-yellow divider-10">$20.00</div>
                <div class="menu-item-add-to-cart divider-10">
                    <div class="button button-style-flat button-size-small">Add to Cart</div>
                </div>
            </div>
        </div>
        <div class="menu-item" v-if="checkActive('salad')">
            <div class="menu-item-image">
                <img class="menu-img" src="/images/menu-10.jpg" alt="">
            </div>
            <div class="img-description">
                <div class="menu-item-name title-h5 title-thin title-color-yellow">Lamb salad</div>
                <div class="menu-item-description divider-10 title-body">Ingridients: Lamb, greens, tomatoes, egg, mustard, spices, branded sauce.</div>
                <div class="menu-price title-h4 title-thin title-color-yellow divider-10">$15.00</div>
                <div class="menu-item-add-to-cart divider-10">
                    <div class="button button-style-flat button-size-small">Add to Cart</div>
                </div>
            </div>
        </div>
        <div class="menu-item" v-if="checkActive('seafood')">
            <div class="menu-item-image">
                <img class="menu-img" src="/images/menu-12.jpg" alt="">
            </div>
            <div class="img-description">
                <div class="menu-item-name title-h5 title-thin title-color-yellow">Sea assorted</div>
                <div class="menu-item-description divider-10 title-body">Ingridients: Squid, mussels, shrimp, octopus, spices, signature sauce.</div>
                <div class="menu-price title-h4 title-thin title-color-yellow divider-10">$19.99</div>
                <div class="menu-item-add-to-cart divider-10">
                    <div class="button button-style-flat button-size-small">Add to Cart</div>
                </div>
            </div>
        </div>
        <div class="menu-item" v-if="checkActive('meat')">
            <div class="menu-item-image">
                <img class="menu-img" src="/images/menu-13.jpg" alt="">
            </div>
            <div class="img-description">
                <div class="menu-item-name title-h5 title-thin title-color-yellow">Rice noodles</div>
                <div class="menu-item-description divider-10 title-body">Ingridients: Rice noodles, pork, specialty sauce, spices, ground black pepper.</div>
                <div class="menu-price title-h4 title-thin title-color-yellow divider-10">$20.00</div>
                <div class="menu-item-add-to-cart divider-10">
                    <div class="button button-style-flat button-size-small">Add to Cart</div>
                </div>
            </div>
        </div>
        <div class="menu-item" v-if="checkActive('meat')">
            <div class="menu-item-image">
                <img class="menu-img" src="/images/menu-14.jpg" alt="">
            </div>
            <div class="img-description">
                <div class="menu-item-name title-h5 title-thin title-color-yellow">Lamb steak</div>
                <div class="menu-item-description divider-10 title-body">Ingridients: Lamb, tomatoes, asparagus, bell pepper, specialty sauce, spices.</div>
                <div class="menu-price title-h4 title-thin title-color-yellow divider-10">$30.00</div>
                <div class="menu-item-add-to-cart divider-10">
                    <div class="button button-style-flat button-size-small">Add to Cart</div>
                </div>
            </div>
        </div>
        <div class="menu-item" v-if="checkActive('appetizer')">
            <div class="menu-item-image">
                <img class="menu-img" src="/images/menu-15.jpg" alt="">
            </div>
            <div class="img-description">
                <div class="menu-item-name title-h5 title-thin title-color-yellow">Appetizer with squid</div>
                <div class="menu-item-description divider-10 title-body">Ingridients: Squid, assorted vegetables, apples, specialty sauce, spices.</div>
                <div class="menu-price title-h4 title-thin title-color-yellow divider-10">$15.00</div>
                <div class="menu-item-add-to-cart divider-10">
                    <div class="button button-style-flat button-size-small">Add to Cart</div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
  name: "CatalogPage",
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
