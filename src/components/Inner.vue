<template>
  <div class="hello">
    <h1>{{ heading }}</h1>
    <v-carousel
        class="hidden-sm-and-down"
        hide-delimiters
        style="margin-bottom: 100px"
    >
      <a
          v-for="(img,desktopCount) in imagesDesktop"
          :key="desktopCount + Math.random()"
          :href="img.src"
      >
        <v-carousel-item
            :src="img.src"
        ></v-carousel-item>
      </a>
    </v-carousel>
    <v-carousel
        class="hidden-md-and-up"
        hide-delimiters
        style="margin-bottom: 100px"
    >
      <a
          v-for="(img,mobileCount) in imagesMobile"
          :key="mobileCount + Math.random()"
          :href="img.src"
      >
        <v-carousel-item
            :src="img.src"
        ></v-carousel-item>
      </a>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'Inner',
  props: {
    heading: String,
    mobileCount: String,
    desktopCount: String
  },
  computed: {
    imagesMobile: function () {
      let array = []
      for (let i = 0; i < this.mobileCount; i++) {
        array.push(
          {
            src: `https://picsum.photos/1200/800?image=${Math.round(Math.random() * 1000)}`
          }
        )
      }
      return array
    },
    imagesDesktop: function () {
      let array = []
      for (let i = 0; i < this.desktopCount; i++) {
        array.push(
          {
            src: `https://picsum.photos/1200/800?image=${Math.round(Math.random() * 1000)}`
          }
        )
      }
      return array
    }
  }
}
</script>

<style scoped lang="scss">
  h1 {
    margin-bottom: 35px;
  }
</style>
