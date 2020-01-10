<template>
 <button class="toggleButton" @click="clicked" :style="style">{{isOn ? 'On' : 'Off'}}</button>  
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator'
import { mapState } from 'vuex'


@Component({
  computed: mapState(['background'])
})

export default class ToggleButton extends Vue {
  @Prop([Boolean]) readonly isOn!: boolean; 

  background!: any

  get style(): string {
    return this.isOn ? `background: ${this.background.backgroundColors[this.background.backgroundColors.length - 1]}` : ''
  }

  clicked() {
    this.$emit('clicked')
  }
}
</script>

<style scoped>
button {
  width: 3em;
  background: #00000080;
  /* opacity: 50%; */
  border: none;
  color: white;
  border-radius: 10px;
  font-size: inherit;
  font-size: calc(1.3em - 10px);
  margin: 3px;
}

button:hover {
  opacity: .9;
}
</style>