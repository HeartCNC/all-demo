<template>
  <div class="page-ps">
    <div class="container">
      <div v-for="item in 100"
           :key="item">{{item}}</div>
    </div>
  </div>
</template>

<script>
// @ts-check

import 'perfect-scrollbar/css/perfect-scrollbar.css'
import PerfectScrollbar from 'perfect-scrollbar';
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
    const ps = new PerfectScrollbar('#app', {
      wheelSpeed: 0.2
    });
    console.log(ps)
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.page-ps {
  position: relative;
  width: 100%;
  height: 400px;
  position: relative;
  // height: 100vh;
  .container {
    width: 100%;
    // height: 100%;
  }
}
</style>
