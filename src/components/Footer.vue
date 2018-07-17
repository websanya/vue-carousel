<template>
  <v-footer color="red darken-2" app>
    <span class="copyright white--text">© 2018 <a href="https://github.com/websanya/">Alexander Goncharov</a></span>
    <span class="white--text" style="position: absolute; right: 12px">версия: {{ VERSION }}</span>
  </v-footer>
</template>

<script>
export default {
  props: {},
  computed: {
    VERSION: () => {
      return require('../../package').version
    }
  }
}
</script>

<style scoped lang="scss">
  .copyright {
    padding-left: 12px;
  }
  a {
    color: lighten(#B78B5F, 30%);
  }
</style>
