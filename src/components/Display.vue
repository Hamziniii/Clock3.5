<template>
 <div id="clockDisplay" v-if="this.$store.state.display.show">hi</div>  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'

@Component({
  // computed: mapGetters(['body'])
})

export default class Display extends Vue {}
</script>

<style scoped>
#clockDisplay {
  place-self: center;
}
</style>