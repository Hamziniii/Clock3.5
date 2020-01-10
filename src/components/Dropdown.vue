<template>
  <div class="clockDropdown">
    <button :style="gBackground" @click="clicked(current)" class="clockDropdownCurrent">{{types[current]}}</button>
    <button :style="gBackground" @click="clicked(types.indexOf(type))" class="clockDropdownHidden" v-for="(type, index) in typeList" :key="index">{{type}}</button>
  </div>  
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { mapState } from 'vuex'

@Component({
  computed: mapState(['background'])
})

export default class Dropdown extends Vue {
  @Prop([Number]) readonly current!: number
  @Prop([Array]) readonly types!: string[]
  background!: any

  get typeList():string[] {
    return this.types.filter((v, i) => i != this.current)
  }

  clicked(index: number):void {
    // eslint-disable-next-line no-console
    console.log("clicked " + index)
    this.$emit("clicked", index)
  }

  get gBackground() {
    return `background: ${this.background.backgroundColors.length > 1 ? this.background.backgroundColors[this.background.backgroundColors.length - 2] : this.background.backgroundColors[this.background.backgroundColors.length - 1]}`
  }
}
</script>

<style scoped>
button {
  width: 4em;
  background: #00000080;
  /* opacity: 50%; */
  border: none;
  color: white;
  border-radius: 10px;
  font-size: inherit;
  font-size: calc(1.3em - 10px);
  /* margin: 1.5px;
  padding: 1.5px; */
}

button:hover {
  opacity: .8;
}

.clockDropdown {
  position: relative;
  display: inline-block;
}

.clockDropdownHidden {
  display: none;
  position: absolute;
  /* z-index: 1; */
}

.clockDropdown:hover  .clockDropdownHidden {
  display: block;
}

.clockDropdown:active .clockDropdownHidden {
  display: block;
}
</style>