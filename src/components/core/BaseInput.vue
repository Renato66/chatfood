<template>
  <div class="cf-input" :class="{'--icon': icon, '--active': active}">
    <BaseIcon v-if="icon" :icon="icon" @click="focusInput" />
    <input ref="input" type="text" v-model="input" data-cy="search" :placeholder="placeholder" @focus="active = true" @blur="active = false" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BaseInput',
  components: {
    BaseIcon: () => import(/* webpackChunkName: "icons" */ '@/components/core/BaseIcon.vue')
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    value: {
      type: String
    }
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    focusInput () {
      (this.$refs.input as HTMLFormElement).focus()
    }
  },
  computed: {
    input: {
      get () {
        // @ts-ignore
        return this.value
      },
      set (value) {
        // @ts-ignore
        this.$emit('input', value)
      }
    }
  }
})
</script>

<style lang="scss">
.cf-input {
  border: 2px solid #EBEFF4;
  box-sizing: border-box;
  border-radius: 7px;
  transition: border 0.3s;
  cursor: text;
  &:hover {
    border-color: $primary
  }
  &:focus {
    outline: none;
  }
  input {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 7px;
    padding-left: 6px;
    padding: 14px 7px 14px 7px;
    font-size: 14px;
    box-sizing: border-box;
    font-weight: 400px;
    color: $black;
    &::placeholder {
      font-weight: 400px;
      color: $gray;
    }
    &:focus {
      outline: none;
    }
  }
  &.--icon {
    svg {
      margin-top: 10px;
      margin-left: 6px;
      opacity: 0.2;
      transition: fill 0.3s, opacity 0.3s;
      stroke: transparent;
      fill: $gray;
      position: absolute;
    }
    input {
      width: 100%;
      height: 100%;
      border: 0;
      border-radius: 7px;
      padding-left: 34px;
      box-sizing: border-box;
    }
  }
  &.--active {
    border-color: $primary;
    svg {
      opacity: 1;
      fill: $primary;
    }
  }
}
</style>
