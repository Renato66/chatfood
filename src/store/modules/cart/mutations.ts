import { MutationTree } from 'vuex'
import { Mutations, MutationTypes, State } from './types/'

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.PUSH_ITEM] (state, payload) {
    state.items = [...state.items, payload]
  }
}
