<template>
  <div class="page-pixi">
    <canvas ref="canvas" width="750"></canvas>
  </div>
</template>

<script>
// @ts-check
import { Game, load } from '@/pixi-game'
export default {
  components: {},
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
  },
  async mounted() {
    const game = new Game(this.$refs.canvas)
    await load()
    game.play()
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.page-pixi {
  position: relative;
  width: 100%;
  height: 100vh;
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
