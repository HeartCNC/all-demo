<template>
  <div class="page-index">
    <button class="btm"></button>
  </div>
</template>

<script>
// @ts-check

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
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.page-index {
  position: relative;
  .btm {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    height: 20px;
    border: 1px solid #000;
  }
  @supports (bottom: env(safe-area-inset-bottom)) {
    .btm {
      padding-bottom: env(safe-area-inset-bottom);
    }
  }
}
</style>
