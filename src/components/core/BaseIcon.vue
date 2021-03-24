<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :viewBox="`0 0 ${size} ${size}`"
  >
    <path :d="loadedIcon" />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
interface EsModule {
  default: string;
}
export default Vue.extend({
  name: 'BaseButton',
  props: {
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 24
    }
  },
  data () {
    return {
      loadedIcon: ''
    }
  },
  methods: {
    async lazyIcon (): Promise<string> {
      return ((await import(
        /* webpackChunkName: "icons" */ `@/helpers/@mdi/js/${this.icon}`
      )) as EsModule).default
    }
  },
  async created () {
    if (this.icon) {
      this.loadedIcon = await this.lazyIcon()
    }
  }
})
</script>

<style></style>
