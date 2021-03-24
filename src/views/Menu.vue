<template>
  <div class="menu-wrapper">
    <BaseButton icon="mdiArrowLeft" @click="reset"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseButton from '@/components/core/BaseButton.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    BaseButton
  }
})
</script>

<style lang="scss">
.menu-wrapper {
  padding: 49px 15px;
}
</style>
