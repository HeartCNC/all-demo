import { Howl } from "howler"
const CHINESE_NUM = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
const UNIT_SOUND = {
  '两': '2',
  '十': 'ten',
  '百': 'hundred',
  '千': 'thousand'
}

const SOUND = {}

const SOUND_AUDIO = {}

CHINESE_NUM.forEach((v, i) => {
  SOUND[v] = require(`../assets/sounds/tts_${i}.mp3`)
})

for (const i in UNIT_SOUND) {
  const v = UNIT_SOUND[i]
  SOUND[i] = require(`../assets/sounds/tts_${v}.mp3`)
}

const queue = []

function onend() {
  if (queue.length) {
    const audio = queue.shift()
    audio.play()
  }
}

for (const i in SOUND) {
  const v = SOUND[i]
  SOUND_AUDIO[i] = new Howl({
    src: [v],
    rate: 1.2,
    onend
  })
}

export function speak(s) {
  const sArr = s.split('').map(v => SOUND_AUDIO[v])
  queue.push(...sArr)
  onend()
}
