<template>
  <div id="clock" :style="body">
    <div id="clockMain" :style="main">
      <Display/>
      <Info/>
      <p v-if="!this.$store.state.display.show && !this.$store.state.info.show">hi there, im really bored right now, ummmmmmmmmmmmmmmmmmmmmmm so you need to display either one of these. soooooooooooooooooooooooooooooooooooooo please make at least one visible. k thx bai</p>
    </div>
    <Buttons/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import Display from './components/Display.vue'
import Info from './components/Info.vue'
import Buttons from './components/Buttons.vue'

@Component({
  components: {
    Display,
    Info,
    Buttons
  },
  computed: mapGetters(['body', 'main'])
})
export default class Clock extends Vue {}
</script>

<style>
*:focus {
    outline: none;
}

body {
  margin: 0;
}

#clock {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  height: 100vh;
  width: 100vw;

  display: grid;
}

#clockMain {
  width: 75vw;
  height: 60vh;

  place-self: center;
  background: black;
  opacity: .4;

  display: grid;
  grid-template-rows: 2fr 1fr;
}

@media (max-width: 766px) and (min-width: 576px) {
  #clockMain {
    width: 575px;
  }
}

@media (max-width: 575px) {
  #clockMain {
    width: 100vw;
  }
}
</style>
