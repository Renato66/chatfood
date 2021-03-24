<template>
  <div class="menu-wrapper">
    <BaseButton icon="mdiArrowLeft" @click="reset"/>
    <h2>{{ $t('menu.search') }}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseButton from '@/components/core/BaseButton.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    BaseButton
  },
  methods: {
    reset () {
      console.log('reset')
    }
  }
})
</script>

<style lang="scss">
.menu-wrapper {
  padding: 49px 15px;
}
</style>
