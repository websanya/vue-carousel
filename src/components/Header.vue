<template>
  <header>
    <v-toolbar color="red darken-3" dark app fixed clipped-left>
      <v-toolbar-title class="hidden-xs-only">Vue.js Carousel App — {{ subtitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/" flat>Home</v-btn>
        <v-btn to="/about" flat>About us</v-btn>
        <v-btn to="/contact" flat>Contact us</v-btn>
        <!--<router-link to="/">Home</router-link>-->
        <!--|-->
        <!--<router-link to="/about">About us</router-link>-->
        <!--|-->
        <!--<router-link to="/contact">Contact us</router-link>-->
      </v-toolbar-items>
    </v-toolbar>
  </header>
</template>

<script>
export default {
  props: ['subtitle'],
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  #nav {
    margin-top: 92px;
  }
</style>
