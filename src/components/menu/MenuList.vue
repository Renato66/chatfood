<template>
  <section aria-busy="false">
    <div v-for="(item, index) in itemsList" :key="index">
      <ItemCard
        :item="item"
        :selected="cartItemsListQuantity"
        @click="ADD_TO_CART"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  components: {
    ItemCard: () => import('@/components/ItemCard.vue')
  },
  computed: {
    ...mapGetters('menu', ['itemsList']),
    ...mapGetters('cart', ['cartItemsListQuantity'])
  }
})
</script>

<style></style>
