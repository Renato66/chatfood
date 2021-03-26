<template>
  <button class="cf-button" :class="classes" @click="$emit('click')">
    <BaseIcon v-if="icon" :icon="icon" />
    <slot/>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BaseButton',
  components: {
    BaseIcon: () => import(/* webpackChunkName: "icons" */ '@/components/core/BaseIcon.vue')
  },
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes () {
      return {
        'cf-button--rounded': !!this.icon
      }
    }
  }
})
</script>

<style lang="scss">
.cf-button {
  background: transparent;
  border: 0;
  padding: 10px;
  line-height: 1px;
  transition: 0.3s;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0px 1px 3px #c7c7c7;
  }
  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: inset 0px 4px 7px #c7c7c7;
  }
  &--rounded {
    border-radius: 100%;
  }
}
</style>
