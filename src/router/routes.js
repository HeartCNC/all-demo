export default [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('@/views/index/index')
  },
  {
    path: '/ps',
    component: () => import('@/views/ps/index')
  },
  {
    path: '/sound',
    component: () => import('@/views/sound/index')
  },
  {
    path: '/antv',
    component: () => import('@/views/antv/index')
  },
  {
    path: '/scratch',
    component: () => import('@/views/scratch/index')
  },
  {
    path: '/pixi',
    component: () => import('@/views/pixi/index')
  }
]
