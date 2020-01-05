<template>
  <div id="clockInfo" v-if="this.$store.state.info.show">bye</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'

@Component({
  // computed: mapGetters(['body'])
})

export default class Info extends Vue {}
</script>

<style scoped>
#clockInfo {
  place-self: center;
}
</style>