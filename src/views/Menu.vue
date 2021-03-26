<template>
  <div class="cf-menu-view">
    <header class="cf-header">
      <BaseButton class="cf-header__back-button" icon="mdiArrowLeft" @click="RESET_CART"/>
      <h2 class="cf-header__title">{{ $t('menu.search') }}</h2>
      <input type="text" v-model="search" />
    </header>
    <transition name="component-fade" mode="out-in">
      <component v-bind:is="view"></component>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseButton from '@/components/core/BaseButton.vue'
import { mapActions, mapGetters } from 'vuex'
import { ActionTypes as MenuActionTypes } from '@/store/modules/menu/types/actions'
import { ActionTypes as CartActionTypes } from '@/store/modules/cart/types/actions'
import { debounce } from '@/helpers/utils'

export default Vue.extend({
  name: 'Home',
  components: {
    BaseButton,
    BaseLoading: () => import('@/components/core/BaseLoading.vue'),
    BaseError: () => import('@/components/core/BaseError.vue'),
    EmptyList: () => import('@/components/menu/EmptyList.vue'),
    MenuList: () => import('@/components/menu/MenuList.vue')
  },
  data () {
    return {
      search: '',
      error: false
    }
  },
  computed: {
    ...mapGetters('menu', ['loading', 'itemsList']),
    view () {
      if (this.loading) return 'BaseLoading'
      if (this.error) return 'BaseError'
      if (this.itemsList.length === 0) return 'EmptyList'
      return 'MenuList'
    }
  },
  methods: {
    ...mapActions('menu', ['GET_MENU', 'SEARCH_MENU'] as MenuActionTypes[]),
    ...mapActions('cart', ['RESET_CART', 'RETRIVE_CART'] as CartActionTypes[])
  },
  watch: {
    // eslint-disable-next-line
    search: debounce(function (this: any, newVal: string) {
      this.SEARCH_MENU(newVal)
    }, 300)
  },
  async mounted () {
    this.RETRIVE_CART()
    this.error = !!await this.GET_MENU()
  }
})
</script>

<style lang="scss">
.cf-menu-view {
  max-width: 1200px;
  margin: auto;
  padding: 49px 15px;
  .cf-error,
  .cf-loading {
    padding-top: 100px;
  }
}

.cf-header {
  &__back-button {
    margin-left: -14px;
  }
  &__title {
    font-size: 26px;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: -0.01em;
    text-align: left;
    color: $black-titles
  }
}
</style>
