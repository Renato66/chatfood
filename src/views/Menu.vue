<template>
  <div class="menu-wrapper">
    <header class="header">
      <BaseButton class="header__back-button" icon="mdiArrowLeft" @click="RESET"/>
      <h2 class="header__title">{{ $t('menu.search') }}</h2>
      <input type="text" />
    </header>
    <section v-if="loading">
      <div>
        Loading...
      </div>
    </section>
    <section v-else-if="error">
      <div>
        Loading...
      </div>
    </section>
    <section v-else>
      <div v-for="(item, index) in itemsList" :key="index">
        <ItemCard :item="item" :selected="cartItemsListQuantity" @click="ADD_TO_CART"/>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseButton from '@/components/core/BaseButton.vue'
import { mapActions, mapGetters } from 'vuex'
import { ActionTypes } from '@/store/modules/menu/types/actions'

export default Vue.extend({
  name: 'Home',
  components: {
    BaseButton,
    ItemCard: () => import('@/components/ItemCard.vue')
  },
  data () {
    return {
      error: false
    }
  },
  computed: {
    ...mapGetters('menu', ['loading', 'itemsList']),
    ...mapGetters('cart', ['cartItemsListQuantity'])
  },
  methods: {
    ...mapActions('menu', ['GET_MENU'] as ActionTypes[]),
    ...mapActions('cart', ['ADD_TO_CART', 'RESET'])
  },
  async mounted () {
    this.error = !!await this.GET_MENU()
  }
})
</script>

<style lang="scss">
.menu-wrapper {
  padding: 49px 15px;
}

.header {
  &__back-button {
    margin-left: -14px;
  }
  &__title {
    color: $black-titles
  }
}
</style>
