<template>
  <div id="clockButtons">
    <button id="clockNotification" :style="colorBackground" @click="toggleNotifications">
      <i class="material-icons">{{notificationImage}}</i>
    </button>
    <button id="clockSettings" :style="colorBackground" @click="toggleSettings">
      <i class="material-icons">settings</i>
    </button>
  </div>  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters, mapMutations, mapState } from 'vuex'

@Component({
  computed: {
    ...mapGetters(['colorBackground']),
    ...mapState(['notifications'])
  },
  methods: mapMutations(['toggleSettings', 'toggleNotifications'])
})

export default class Buttons extends Vue {  
  notifications!: boolean

  get notificationImage():string {
    return this.notifications ? 'notifications_active' : 'notifications_off'
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

@media (max-height: 350px) {
  button {
    display: none;
  }
}

</style> 