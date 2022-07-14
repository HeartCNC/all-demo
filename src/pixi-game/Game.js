import { Application, utils } from 'pixi.js'
import { GameState, UserState } from './utils/state'
import { VIndex } from './views'

utils.skipHello()

export class Game extends utils.EventEmitter {
  constructor(view, options = {}) {
    super()
    UserState.options = this.options = options

    const width = view.width
    const cptStyle = getComputedStyle(view)
    const w = cptStyle.width.replace('px', '') * 1
    const h = cptStyle.height.replace('px', '') * 1
    const height = (width / w) * h
    const app = new Application({
      antialias: true,
      transparent: true,
      view,
      width,
      height
    })
    GameState.width = width
    GameState.height = height
    GameState.app = this.app = app
    GameState.game = this
  }

  play() {
    if (this.app.stage.children.length) {
      this.app.stage.removeChildren()
    }
    this.app.stage.addChild(new VIndex())
  }
}
