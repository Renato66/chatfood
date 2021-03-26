<template>
  <BaseError />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PageNotFound',
  components: {
    BaseError: () => import('@/components/core/BaseError.vue')
  }
})
</script>

<style lang="scss">
.cf-error {
  padding-top: 100px;
}
</style>
