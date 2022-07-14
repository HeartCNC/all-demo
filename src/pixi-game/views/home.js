/* eslint-disable no-unused-vars */
import { BLEND_MODES, Container, filters, Graphics, Sprite } from 'pixi.js'
import { GameState } from '../utils/state'

export class VHome extends Container {
  constructor() {
    super()
    // const bg = Sprite.from('bg_jpg')
    // this.addChild(bg)

    const bg1 = Sprite.from('bg1_jpg')
    this.addChild(bg1)
    
    const bg = new Graphics()
    .beginFill(0x000, 0.5)
    .drawRect(0, 0, bg1.width, bg1.height)
    .endFill()
    this.addChildAt(bg, 0)

    const g = new Graphics()
    .beginFill(0x000, 0)
    .drawRect(0, 0, bg1.width, bg1.height)
    .endFill()
    this.addChild(g)
    g.position.set(bg1.x, bg1.y)

    bg1.mask = g

    function clearDraw(point) {
      g.beginFill(0x000, 1)
      .drawCircle(point.x, point.y, Math.PI * 2 * 10)
      // .drawRect(point.x, point.y, 1, 1)
      .endFill()
    }

    const onTouchMove = (e) => {
      const p = e.data.getLocalPosition(bg1, bg1.position.clone())
      clearDraw(p)
    }
    const onTouchEnd = () => {
      const arr = GameState.app.renderer.plugins.extract.pixels(bg1)
      const array = Array.from(arr)
      let alphaCount = array.length / 4
      let notAlpha = 0
      let i = 1
      for (; i <= alphaCount; i++) {
        const v = array[i * 4 - 1]
        if (v === 255) {
          notAlpha++
        }
      }
      console.log(alphaCount, notAlpha,  notAlpha / alphaCount * 100 + '%');
    }
    // clearDraw({
    //   x: 0, y: 0
    // })
    // onTouchEnd()
    bg1.interactive = true
    bg1.on('pointerdown', onTouchMove)
      .on('pointermove', onTouchMove)
      .on('pointerup', onTouchEnd)
      .on('pointerupoutside', onTouchEnd)
      .on('pointer tap', onTouchMove)
  }

  calcArea(target) {
    console.log(target)
  }

  __addView() {
  }

  __addAnime() {
  }

  __update() {
  }
}
