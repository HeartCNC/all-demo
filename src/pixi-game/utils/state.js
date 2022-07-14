/**
 * 运行中数据状态
 */

/**
 * 全局
 */
export const GameState = {
  /**
   * @type {import('pixi.js').Application}
   */
  app: null,
  /**
   * @type {import('../Game').Game}
   */
  game: null,
  /**
   * 运行速度
   */
  uspeed: 2,
  /**
   * 初始速度
   */
  ispeed: 2,
  /**
   * 运行速度
   */
  get speed() {
    return (GameState.app && (Math.ceil(144 / GameState.app.ticker.FPS * GameState.uspeed))) || 0
  },
  /**
   * 画面宽度
   */
  width: 0,
  /**
   * 画面高度
   */
  height: 0
}

/**
 * 用户数据
 */
export const UserState = {
  /**
   * 运行配置项
   */
  options: {}
}
