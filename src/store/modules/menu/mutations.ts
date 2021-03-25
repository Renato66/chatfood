import { MutationTree } from 'vuex'
import { Mutations, MutationTypes, State } from './types/'

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_LOADING] (state, payload: boolean) {
    state.loading = payload
  }
}
