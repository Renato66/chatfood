<template>
  <section class="cf-menu-list" aria-busy="false">
    <div
      v-for="category in categoriesItemsList"
      :key="category.id"
      class="cf-menu-list__category"
    >
      <h2 class="cf-menu-list__category-name">{{ category.name }}</h2>
      <transition-group name="list" appear tag="ul" class="cf-menu-list__item">
        <li
          v-for="(item, index) in category.items"
          :key="item.id"
          class="cf-menu-list__item-card"
          :style="index > 10 ? null : { transitionDelay: index * 300 + 'ms' }"
        >
          <ItemCard
            :item="item"
            :selected="cartItemsListQuantity"
            @click="ADD_TO_CART"
          />
        </li>
      </transition-group>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
export default Vue.extend({
  data () {
    return {
      stagger: true
    }
  },
  components: {
    ItemCard: () => import('@/components/ItemCard.vue')
  },
  computed: {
    ...mapGetters('menu', ['categoriesItemsList']),
    ...mapGetters('cart', ['cartItemsListQuantity'])
  },
  methods: {
    ...mapActions('cart', ['ADD_TO_CART'])
  }
})
</script>

<style lang="scss">
.cf-menu-list {
  &__category-name {
    font-size: 26px;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: -0.01em;
  }
  &__item {
    padding-left: 0px;
    &-card {
      display: block;
      &.list-leave {
        transform: scale(1);
        opacity: 1;
        height: 50px;
        margin: 5px;
      }
      &.list-leave-to {
        transform: scale(0.5);
        opacity: 0;
        height: 0px;
        margin: 0px;
      }
    }
  }
}
// TODO: @include generate(--items, min-height);

.list-enter {
  transform: translateX(-100px);
  opacity: 0;
}
.list-enter-to {
  transform: translateX(0px);
  opacity: 1;
}
.list-enter-active {
  transition: transform 1s cubic-bezier(0.8, -0.6, 0.2, 1.5),
    opacity 1s cubic-bezier(0.8, -0.6, 0.2, 1.5);
}
.list-leave-active {
  transition: transform 1s cubic-bezier(0.8, -0.6, 0.2, 1.5),
    opacity 1s cubic-bezier(0.8, -0.6, 0.2, 1.5),
    height 1s cubic-bezier(0.8, -0.6, 0.2, 1.5),
    margin 1s cubic-bezier(0.8, -0.6, 0.2, 1.5);
}
</style>
