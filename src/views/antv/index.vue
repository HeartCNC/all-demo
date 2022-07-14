<template>
  <div class="page-antv">
    <div ref="chart"
         class="container"></div>
    <div ref="chart2"
         class="container"></div>
    <div ref="chart3"
         class="container"></div>
  </div>
</template>

<script>
import bar from './bar'
import districtMap from './district-map'
import line from './line'

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
  mounted() {
    bar(this.$refs.chart)
    districtMap(this.$refs.chart2)
    line(this.$refs.chart3)
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.page-antv {
  position: relative;
  display: flex;
  .container {
    display: inline-block;
    position: relative;
    width: 400px;
    height: 200px;
    border: 1px solid #999;
  }
}
</style>

<style>
.l7-control-logo {
  display: none;
}
</style>