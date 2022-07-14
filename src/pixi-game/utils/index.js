export function random(min, max) {
  return Math.round(Math.random() * (max - min)) + min
}

export function newArr(n = 0, fill = null) {
  return Array(n).fill(fill)
}

export function repeatArr(arr, repeat) {
  return newArr(repeat, arr).flat()
}

export function newMatrix(row = 0, col = 0, fill = null) {
  return newArr(col, fill).map(() => newArr(row, fill))
}

/**
 * 打乱数组顺序
 * @param {Array<any>} arr 数组
 * @returns {Array} 乱序数组
 */
export function rndSortArr(arr) {
  arr.sort(() => {
    return Math.random() - 0.5
  })
  return arr
}

/**
 * 角度转弧度
 * PI / 180 * angle = radius
 * @param {number} angle 角度
 */
export function radiusOf(angle) {
  return Math.PI / 180 * angle
}

export function distanceOf(x1, y1, x2, y2) {
  return Math.sqrt(
    (x1 - x2) * (x1 - x2) +
    (y1 - y2) * (y1 - y2)
  )
}

export function getCenterPoint(sprite) {
  const x = sprite.x + (1 - sprite.anchor.x * sprite.width)
  const y = sprite.y + (1 - sprite.anchor.y * sprite.height)
  return {
    x: x + sprite.width / 2,
    y: y + sprite.height / 2
  }
}

export function hitTestRectangle(p1, p2) {
  const p1cp = getCenterPoint(p1)
  const p2cp = getCenterPoint(p2)

  const diffX = Math.abs(p1cp.x - p2cp.x)
  const diffY = Math.abs(p1cp.y - p2cp.y)

  return diffX <= (p1.hitTestArea.width + p2.hitTestArea.width) / 2 && diffY <= (p1.hitTestArea.height + p2.hitTestArea.height) / 2
}

export function hitTestCircle(p1, radius1, p2, radius2 = radius1) {
  const p1cp = getCenterPoint(p1)
  const p2cp = getCenterPoint(p2)
  const diff = distanceOf(p1cp.x, p1cp.y, p2cp.x, p2cp.y)
  return diff <= radius1 + radius2
}

/**
 * 按照权重获取一个随机值
 * @param {Array<number>} weights 权重值
 * @example
 * ```js
 * const size = [{v: 1, w: 3}, {v: 2, w: 5}, {v: 3, w: 2}]
 * const index = roll(size.map(item => item.w))
 * console.log(size[index])
 * ```
 * @returns {number} 索引
 */
export function roll(weights = []) {
  let sumWeight = 0
  const arr = weights.map(item => {
    sumWeight += item
    return sumWeight
  })
  const rnd = random(1, sumWeight)
  return arr.findIndex(item => rnd <= item)
}

export const deepClone = obj => {
  if (obj === null) return null
  const clone = Object.assign({}, obj)
  Object.keys(clone).forEach(
    key =>
    (clone[key] =
      typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  )
  if (Array.isArray(obj)) {
    clone.length = obj.length
    return Array.from(clone)
  }
  return clone
}
