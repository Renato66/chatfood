import { MutationTree } from 'vuex'
import { Mutations, MutationTypes, State } from './types/'

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.PUSH_ITEM] (state, payload) {
    const newItemsArray = [...state.items, payload]
    state.items = newItemsArray
    window.localStorage.setItem('cf-cart-items', JSON.stringify(newItemsArray))
  },
  [MutationTypes.SET_ITEMS] (state, payload) {
    state.items = payload
  }
}
