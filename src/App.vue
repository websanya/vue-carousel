<template>
  <v-app>
    <transition>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </v-app>
</template>

<style lang="scss">
  #app {
    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #666C66;
    text-align: center;
  }

  a {
    color: #5F4B8B;
  }

  #nav {
    margin: 30px auto;
    a {
      font-weight: bold;
      &.router-link-exact-active {
        color: #B78B5F;
      }
    }
  }

  .material-icons {
    font-family: 'Material Icons', sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 300;
    src: url('../src/assets/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: italic;
    font-weight: 300;
    src: url('../src/assets/fonts/Source_Sans_Pro/SourceSansPro-LightItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    src: url('../src/assets/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: italic;
    font-weight: 400;
    src: url('../src/assets/fonts/Source_Sans_Pro/SourceSansPro-Italic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    src: url('../src/assets/fonts/Source_Sans_Pro/SourceSansPro-SemiBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: italic;
    font-weight: 600;
    src: url('../src/assets/fonts/Source_Sans_Pro/SourceSansPro-SemiBoldItalic.ttf') format('truetype');
  }
</style>
