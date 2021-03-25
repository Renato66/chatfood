<template>
  <div class="menu-wrapper">
    <header class="header">
      <BaseButton icon="mdiArrowLeft" @click="reset"/>
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
        {{item}}
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
    BaseButton
  },
  data () {
    return {
      error: false
    }
  },
  computed: {
    ...mapGetters('menu', ['loading', 'itemsList'])
  },
  methods: {
    ...mapActions('menu', ['GET_MENU'] as ActionTypes[]),
    ...mapActions('cart', ['reset'])
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
  &__title {
    color: $black-titles
  }
}
</style>
