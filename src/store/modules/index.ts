type Module = {
  [key: string]: {
    [key: string]: unknown | boolean
  },
}

const requireModule = require.context('.', true, /\.ts$/)
const modules: Module = {}

requireModule.keys().forEach(fileName => {
  if (fileName === './index.ts') return

  const path = fileName.replace(/(\.\/|\.ts)/g, '')
  const [moduleName, imported] = path.split('/')

  if (!modules[moduleName]) {
    modules[moduleName] = {
      namespaced: true
    }
  }

  modules[moduleName][imported] = requireModule(fileName).default
})

export default modules
