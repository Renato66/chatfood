import { GetterTree } from 'vuex'
import { Getters, State } from './types'

export const getters: GetterTree<State, State> & Getters = {
  cartItemsListQuantity: (state) => {
    return state.items.reduce((acc, elem) => {
      acc[elem.id] = ++acc[elem.id] || 1
      return acc
    }, {} as {[key: string]: number})
  }
}
