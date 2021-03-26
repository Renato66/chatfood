<template>
  <div class="cf-loading">
    <svg
      data-v-a54d39c6=""
      fill="none"
      viewBox="0 0 40 51"
      class="cf-loading__svg"
    >
      <path
        fill="#1258FF"
        fill-rule="evenodd"
        d="M17.709 39.305v10.762s10.751-8.863 18.34-18.992c2.686-3.583 4.51-9.226 3.795-13.927C38.29 6.914 29.944-.164 19.606.055 8.78.284 0 8.84 0 19.68c0 17.093 17.709 19.625 17.709 19.625zM30 19.833c0 5.477-4.477 9.917-10 9.917s-10-4.44-10-9.917c0-5.476 4.477-9.916 10-9.916s10 4.44 10 9.916z"
        clip-rule="evenodd"
      ></path>
    </svg>
  </div>
</template>

<style lang="scss">
.cf-loading {
  text-align: center;
  &__svg {
    width: 100px;
    height: 100px;
    animation-name: pulse_animation;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
}

@keyframes pulse_animation {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;

  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
}
</style>
