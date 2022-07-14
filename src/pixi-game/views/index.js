import { Container } from 'pixi.js'
import { VHome } from './home'

export class VIndex extends Container {
  constructor() {
    super()
    this.addChild(new VHome())
  }
}
