import { ActionTreeMap, ActionTypes, MutationTypes } from './types'

export const actions:ActionTreeMap = {
  async [ActionTypes.ADD_TO_CART] ({ dispatch, commit }, payload) {
    try {
      // commit(MutationTypes.SET_LOADING, true)
      // googleAnalitic('ADD_TO_CART')
      const isAvaliable = await dispatch(ActionTypes.CHECK_AVAILABILITY, payload)
      if (isAvaliable) {
        commit(MutationTypes.PUSH_ITEM, payload)
      }
    } catch (error) {
      console.log(error)
    } finally {
      // commit(MutationTypes.SET_LOADING, false)
    }
  },
  async [ActionTypes.CHECK_AVAILABILITY] ({ getters }, payload) {
    try {
      // const isAvaliable = await checkAvailability(payload.id)
      const isAvaliable = payload.stock.availability >= (getters.cartItemsListQuantity[payload.id] || 0) + 1
      // if (!isAvaliable) googleAnalitic('NOT_AVALIABLE')
      return isAvaliable
    } catch (error) {
      console.log(error)
      return false
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
