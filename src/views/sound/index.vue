<template>
  <div class="page-sound">
    <button @click="playVoice()">123123</button>
  </div>
</template>

<script>
// @ts-check
import { num2cn } from '@/utils/num2cn'
// import { speak } from '@/utils/speak'
const synth = window.speechSynthesis
const msg = new SpeechSynthesisUtterance()
export default {
  components: {},
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
    // num2cn(12004004002.02)
    // num2cn(200)
    // num2cn(22)
    // num2cn(202)
    // num2cn(1202)
    // num2cn(1212)
    num2cn(12002004002)
  },
  mounted() {
  },
  methods: {
    playVoice() {
      // 数字最多99万
      this.hanldeSpeak('今日用户核销金额累计99元，项目核销金额累计100,000,000元，截止至2022年7月1日10：00：00，今日GMV累计339元，项目GMV累计111,000元。')
      // this.hanldeSpeak('二十二亿零二百二十二万两千二百二十二')
      // speak('两千二百二十二')
    },
    hanldeSpeak(text) {
      msg.text = text // 文本
      msg.lang = 'zh-CN' // 语言
      msg.volume = 1 // 声音音量
      msg.rate = 1.2 // 语速
      msg.pitch = 6 // 音高
      synth.speak(msg)
    },
    handleStop(e) {
      msg.text = e
      msg.lang = 'zh-CN'
      synth.cancel()
    }
  }
}
</script>

<style lang="scss" scoped>
.page-sound {
  position: relative;
}
</style>
