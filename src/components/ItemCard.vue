<template>
  <div class="cf-card" :class="{'--selected': selected[item.id]}" @click="$emit('click', item)" :data-cy="`item-card-${item.id}`">
    <div class="cf-card__text">
      <h4 class="cf-card__title"><span v-if="selected[item.id]">{{ selected[item.id] }} x </span>{{ item.name }}</h4>
      <div class="cf-card__description">
        {{ item.description }}
      </div>
      <div class="cf-card__price">
        <div v-if="discount"> {{ filterCurrency(discount) }}</div>
        <div :class="{'--discount': discount}"> {{ filterCurrency(item.price) }}</div>
      </div>
    </div>
    <div class="cf-card__image" v-if="item.photo">
      <picture>
        <source :srcset="imageSizeProxyWebp" type="image/webp">
        <source :srcset="imageSizeProxy" type="image/jpeg">
        <img :src="imageSizeProxy" :alt="item.name">
      </picture>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    item: {
      type: Object
    },
    size: {
      type: Number,
      default: 91
    },
    selected: {
      type: Object,
      default: () => { return { } }
    }
  },
  computed: {
    imageSizeProxyWebp () {
      return `//images.weserv.nl/?url=${this.item.photo}&w=${this.size}&h=${this.size}&output=webp`
    },
    imageSizeProxy () {
      return `//images.weserv.nl/?url=${this.item.photo}&w=${this.size}&h=${this.size}`
    },
    discount () {
      return this.item.price - this.item.price * this.item.discount_rate
    }
  },
  methods: {
    // filter deprecated
    // https://dev.to/chenxeed/awesome-breaking-changes-in-vue-3-if-you-migrate-from-vue-2-3b98
    filterCurrency (value: number): string {
      return new Intl.NumberFormat(this.$i18n.locale, { style: 'currency', currency: 'AED' }).format(value)
    }
  }
})
</script>

<style lang="scss">
.cf-card {
  position: relative;
  display: flex;
  min-height: 91px;
  margin-bottom: 28px;
  &::after {
    content: ' ';
    display: block;
    position: absolute;
    background: $primary;
    height: 100%;
    left: -30px;
    width: 0px;
    transition: width 0.3s;
  }
  &.--selected::after {
    width: 14px;
  }
  @media only screen and (min-width: 1200px) {
    &::after {
      left: -23px;
    }
    &.--selected::after {
      width: 7px;
    }
  }
  &__text {
    flex-basis: 0%;
    flex-direction: column;
    flex-grow: 1;
    padding-right: 7px;
    width: 106.656px;
  }
  &__title {
    margin: 0px 0px 7px 0px;
    margin-bottom: 7px;
    font-weight: 600;
    font-size: 16px;
    line-height: 131.25%;
  }
  &__description {
    font-size: 14px;
    line-height: 150%;
    color: $gray;
    display: -webkit-box;
    max-width: 100%;
    margin: 0 auto;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__price {
    margin-top: 7px;
    > div {
      font-weight: 600;
      font-size: 14px;
      line-height: 150%;
      display: inline-block;
      margin-right: 14px;
      &.--discount {
        color: $gray;
        font-style: normal;
        font-weight: normal;
        text-decoration-line: line-through;
      }
    }
  }
  &__image {
    border-radius: 7px;
    flex-shrink: 0;
    height: 91px;
    width: 91px;
    > picture > img {
      border-radius: 7px;
    }
  }
}
</style>
