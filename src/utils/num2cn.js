const CHINESE_NUM = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
const UNIT = ['', '十', '百', '千', '万']
const LEVEL_UNIT = ['', '万', '亿']
const DOT = '点'
const UNIT_NUM = 4

function clearZero(r) {
  return r.replace(/零+$/, '').replace(/零+/g, '零')
}

// 4位内数字转汉字
function unit2cn(n) {
  const sn = String(n).split('').reverse()
  const l = sn.length
  let result = ''
  let i = 0
  while (i < l) {
    const s = sn[i] * 1
    const unit = UNIT[s ? i : 0]
    let cn = CHINESE_NUM[s]
    // 处理 二/两
    if (s === 2 && i > 2) {
      cn = '两'
    }
    result = cn + unit + result
    i++
  }
  // 处理零
  result = clearZero(result)
  return result
}

/**
 * 数字转成汉字
 */
export function num2cn(n) {
  const sn = String(n)
  const [int, dec] = sn.split('.')
  const reverseIntStr = int.split('').reverse()
  const level = Math.ceil(reverseIntStr.length / UNIT_NUM)
  const levelGroup = []
  for (let i = 0; i < level; i++) {
    levelGroup.unshift(reverseIntStr.slice(i * UNIT_NUM, (i + 1) * UNIT_NUM).reverse().join('') * 1)
  }
  let result = ''
  const levels = levelGroup.length
  levelGroup.forEach((item, i) => {
    const snSize = String(item).length
    const unit = item ? LEVEL_UNIT[levels - i - 1] : ''
    const zero = (i > 0 && snSize !== UNIT_NUM && item ? CHINESE_NUM[0] : '')
    result = result + zero + unit2cn(item) + unit
    result += String(item).endsWith('0') ? CHINESE_NUM[0] : ''
  })

  // 处理 十/一十
  result = result.replace(/^一十/, '十')
  result = clearZero(result)

  // 小数位
  if (dec) {
    result += DOT + dec.split('').map(v => CHINESE_NUM[v]).join('')
  }
  return result
}
