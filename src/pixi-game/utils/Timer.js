/**
 * 倒计时
 */

export const noop = () => {}
export const cOp = cb => typeof cb === 'function' ? cb : noop

export function wait(t) {
  return new Promise(resolve => setTimeout(resolve, t))
}

class Timer {
  constructor({
    aim,
    unit
  }) {
    this.__isPause = false
    this.__isCancel = false
    this.__diff = 0
    this.__endCb = cOp()
    this.__goingCb = cOp()
    this.__cancelCb = cOp()
    this.aim = aim
    this.unit = unit || 1000
  }

  async __loop() {
    if (this.__isCancel || this.__isPause) {
      return
    } else if (this.__diff <= 0) {
      this.__goingCb(0)
      this.__endCb()
      return
    }
    this.__goingCb(this.__diff)
    await wait(this.unit)
    this.__diff -= this.unit
    this.__loop()
  }

  going(cb) {
    this.__goingCb = cOp(cb)
    return this
  }

  end(cb) {
    this.__endCb = cOp(cb)
    return this
  }

  cancel(cb) {
    this.__cancelCb = cOp(cb)
    return this
  }

  pause() {
    this.__isPause = true
    return this
  }

  stop() {
    this.__isCancel = true
    return this
  }

  go() {
    this.__diff = this.aim - Date.now()
    this.__loop()
    return this
  }

  goon() {
    this.__isPause = false
    this.__loop()
    return this
  }

  static to(aim, unit) {
    return new Timer({
      aim,
      unit
    })
  }

  static left(t, unit = 1000) {
    return new Timer({
      aim: Date.now() + t * unit
    })
  }
}

export default Timer
