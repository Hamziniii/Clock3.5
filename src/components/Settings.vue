<template>
 <div id="clockSettings" v-if="settings.show">
   <div id="clockSettingsBlanket" @click.self="toggleSettings">
     <div id="clockSettingsMain" :style="colorBackground + 'background:none;'">
       <div id="clockSettingsNav" :style="`background: ${backgroundOpacity('80')}`">
         <ul>
           <li :style="`background: ${settings.current == 'display' ? backgroundOpacity('55') : backgroundOpacity('00')}`" @mousedown="changeSettingsCurrent('display')"><span>Display</span></li>
           <li :style="`background: ${settings.current == 'colors' ? backgroundOpacity('55') : backgroundOpacity('00')}`" @mousedown="changeSettingsCurrent('colors')"><span>Colors</span></li>
           <li :style="`background: ${settings.current == 'classes' ? backgroundOpacity('55') : backgroundOpacity('00')}`" @mousedown="changeSettingsCurrent('classes')"><span>Classes</span></li>
         </ul>
       </div>
       <div id="clockSettingsSetting" :style="`background: ${backgroundOpacity('60')}`">
         <div id="clockSettingsSettingInner">
            <div id="clockSettingsSettingInnerHeader">{{settings.current.charAt(0).toUpperCase() + settings.current.slice(1)}}</div>
            <div id="clockSettingsSettingDisplay" v-if="settings.current == 'display'" :style="'text-align: left'">
              <div>Show clock: <ToggleButton :isOn="display.show" @clicked="toggleSomething('display.show')"/></div>
              <br>
              <div>Show information: <ToggleButton :isOn="info.show" @clicked="toggleSomething('info.show')"/></div>
              <div v-if="info.show">
                  <div>Show time left: <ToggleButton :isOn="info.options.timeLeft" @clicked="toggleSomething('info.options.timeLeft')"/></div>
                  <div>Show current period: <ToggleButton :isOn="info.options.currentPeriod" @clicked="toggleSomething('info.options.currentPeriod')"/></div>
                  <div>Show next period: <ToggleButton :isOn="info.options.nextPeriod" @clicked="toggleSomething('info.options.nextPeriod')"/></div>
              </div>
            </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState, mapMutations, mapGetters } from 'vuex'
import ToggleButton from './ToggleButton.vue'

@Component({
  computed: {
    ...mapState(['settings', 'textBackground', 'display', 'info']),
    ...mapGetters(['colorBackground'])
  },
  methods: mapMutations(['toggleSettings', 'changeSettingsCurrent', 'toggleSomething']),
  components: {
    ToggleButton
  }
})

export default class Settings extends Vue {
  textBackground!: string
  backgroundOpacity(opacity: string): string {
    return this.textBackground + opacity
  }


}
</script>

<style scoped>
#clockSettings {
  position: absolute;
}

#clockSettingsBlanket {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.294);
  backdrop-filter: blur(2px);
  z-index: 2;

  display:grid;
}

#clockSettingsMain {
  width: 75vw;
  height: 60vh;

  place-self: center;
  /* background: black; */
  opacity: .9;

  display: grid;
  grid-template-columns: 1fr 3fr;
}

@media (min-width: 890px) {
  #clockSettingsMain {
    width: max(667px, 75vmin);
  }
}

@media (max-width: 766px) and (min-width: 576px) {
  #clockSettingsMain {
    width: 575px;
  }
}

@media (max-width: 575px) {
  #clockSettingsMain {
    width: 100vmin;
    height: min(100vmin, 60vh);
  }
}

#clockSettingsNav {
  border-radius: 40px 0px 0px 40px;
}

ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
  margin-top: 40px;
  width: 100%;
  overflow: hidden;
}

li {
  padding: 20px;
  transition: transform .2s;
}

li:hover {
  transform: scale(1.15);
}

li:active {
  transform: scale(.5);
}

#clockSettingsSetting {
  border-radius: 0px 40px 40px 0px;
  font-size: 1.5rem;
}

@media (max-width: 540px) {
  #clockSettingsSetting {
    font-size: calc(100vw / 26);
  }
}
#clockSettingsSettingInner {
  margin: 40px 0px;
  padding: 0px 40px;
  height: calc(100% - 80px);
  width: calc(100% - 80px);
  /* background: white; */
  display: grid;
  grid-template-rows: calc(42px + 1rem) 1fr;
  grid-row-gap: 15px;
}

#clockSettingsSettingInnerHeader {
  font-size: 2em;
}

 /* {
  height: ;
} */
</style>