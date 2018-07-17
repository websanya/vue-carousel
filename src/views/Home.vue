<template>
  <div class="ws-container">
    <app-header subtitle="Home">
    </app-header>
    <div class="home">
      <Inner heading="Welcome to Vue.js Carousel App" mobileCount="5" desktopCount="10" />
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Inner from '@/components/Inner'

export default {
  name: 'home',
  components: {
    Inner
  }
}
</script>

<style lang="scss">
  .home {
    max-width: 800px;
    margin: 100px auto 0;
    &-img {
      max-width: 400px;
      display: block;
      margin: 0 auto 24px;
    }
  }
</style>
