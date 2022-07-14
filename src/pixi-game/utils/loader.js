import { Loader } from 'pixi.js'
import resource from '../resource'

const loader = new Loader()

export async function load(options = {}) {
  const resources = options.resources || resource.preload || {}
  Object.keys(resources).filter(k => {
    return !loader.resources[k]
  }).forEach(k => {
    loader.add(k, resources[k])
  })
  return new Promise((resolve, reject) => {
    loader.onProgress.add((e) => {
      options.progress && options.progress(e.progress)
    })
    loader.onComplete.add(resolve)
    loader.onError.add(reject)
    loader.load()
  })
}
