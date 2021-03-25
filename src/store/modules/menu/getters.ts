import { GetterTree } from 'vuex'
import { Getters, State } from './types'

export const getters: GetterTree<State, State> & Getters = {
  loading: (state) => {
    return state.loading
  }
}
