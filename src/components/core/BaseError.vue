<template>
  <section class="cf-error">
    <svg class="cf-error__svg" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" data-test="icon"><g stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><circle cx="43.125" cy="43.125" r="15"></circle><path d="M48.75 37.5L37.5 48.75m0-11.25l11.25 11.25m-22.527 9.125C11.793 55.92 1.242 43.277 1.9 28.732c.658-14.546 12.307-26.185 26.853-26.83 14.546-.645 27.18 9.918 29.122 24.348"></path><path d="M23.223 57.303c-3.803-5.58-6.348-15.72-6.348-27.303 0-11.582 2.545-21.72 6.348-27.303M1.938 28.125H26.25m-18.753-15H52.5m-47.38 30h12.915M36.778 2.697a42.523 42.523 0 015.767 17.898"></path></g></svg>
    <h4>Ops...</h4>
    <a href="/">Try again</a>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.cf-error {
  text-align: center;
  &__svg {
    width: 56px;
    height: 56px;
    stroke: $primary;
  }
}
</style>
