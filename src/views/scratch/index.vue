<template>
  <div class="page-scratch">
    <div class="box">
      <div class="main">
        <canvas width="500"
                height="200"
                id='canvas'></canvas>
        <div class="endState">
          <h2>AASS</h2>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
    window.onload = function () {
      let canvas = document.getElementById('canvas');
      let ctx = canvas.getContext('2d');
      ctx.strokeStyle = 'blue';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.rect(0, 0, 600, 300);
      ctx.fillStyle = '#eee';
      ctx.fill();
      canvas.onmousedown = function () {
        canvas.onmousemove = function (e) {
          ctx.clearRect(e.offsetX, e.offsetY, 16, 16);
        }
        document.onmouseup = function () {
          canvas.onmousemove = null;
          document.onmousedown = null;
        }
      }
    }

  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.page-scratch {
  position: relative;
}
</style>
