import { Actions, ActionTypes, MutationTypes, State } from './types'
import { ActionTree } from 'vuex'

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GET_MENU] ({ commit }) {
    commit(MutationTypes.SET_LOADING, true)
  }
}
