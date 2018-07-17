<template>
  <div class="hello">
    <h1>{{ heading }}</h1>
    <carousel>
      <img src="https://placeimg.com/200/200/any?1">
      <img src="https://placeimg.com/200/200/any?2">
      <img src="https://placeimg.com/200/200/any?3">
      <img src="https://placeimg.com/200/200/any?4">
    </carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    heading: String
  }
}
</script>

<style scoped lang="scss">
  h1 {
    margin-bottom: 10px;
  }
</style>
