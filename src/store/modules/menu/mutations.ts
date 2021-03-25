import { MutationTree } from 'vuex'
import { Mutations, MutationTypes, State } from './types/'

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_LOADING] (state, payload) {
    state.loading = payload
  },
  [MutationTypes.SET_CATEGORIES] (state, payload) {
    state.categories = payload
  },
  [MutationTypes.SET_ITEMS] (state, payload) {
    state.items = payload
  }
}
