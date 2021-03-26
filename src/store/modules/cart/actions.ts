import { ActionTreeMap, ActionTypes, MutationTypes } from './types'

export const actions:ActionTreeMap = {
  [ActionTypes.ADD_TO_CART] ({ commit }, item) {
    try {
      // commit(MutationTypes.SET_LOADING, true)
      // googleAnalitic('ADD_TO_CART')
      commit(MutationTypes.PUSH_ITEM, item)
    } catch (error) {
      console.log(error)
    } finally {
      // commit(MutationTypes.SET_LOADING, false)
    }
  },
  [ActionTypes.RETRIVE_CART] ({ commit }) {
    try {
      const oldCart = window.localStorage.getItem('cf-cart-items') || null
      if (oldCart !== null) {
        // googleAnalitic('RETRIVE_CART')
        commit(MutationTypes.SET_ITEMS, JSON.parse(oldCart))
      }
    } catch (error) {
      console.log(error)
    }
  },
  [ActionTypes.RESET_CART] ({ commit }) {
    try {
      window.localStorage.removeItem('cf-cart-items')
      // googleAnalitic('RESET_CART')
      commit(MutationTypes.SET_ITEMS, [])
    } catch (error) {
      console.log(error)
    }
  }
}
