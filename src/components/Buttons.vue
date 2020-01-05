<template>
  <div id="clockButtons">
    <button id="clockNotification" :style="background" @click="flip">
      <i class="material-icons" :style="text">{{notificationImage}}</i>
    </button>
    <button id="clockSettings" :style="background">
      <i class="material-icons" :style="text">settings</i>
    </button>
  </div>  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters, mapMutations } from 'vuex'

@Component({
  computed: {...mapMutations(['flipNotifications'])}
})

export default class Buttons extends Vue {  
  flip():void {
    this.$store.commit('flipNotifications')
  }

  get background():String {
    return `background: ${this.$store.state.textBackground}aa`
  }

  get text():String {
    return `color: ${this.$store.state.textColor}`
  }

  get notificationImage():String {
    return this.$store.state.notifications ? 'notifications_active' : 'notifications_off'
  }
}
</script>

<style scoped>
#clockButtons {
  position: absolute;
  right: 20px;
  bottom: 20px;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 20px;
}

button {
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 50%;
  transition: transform .2s;
}

button:hover {
  transform: scale(1.25);
}

button:active {
  transform: scale(.9);
}
</style> 