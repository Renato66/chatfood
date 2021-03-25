import { ActionTreeMap, ActionTypes, MutationTypes } from './types'
import { load } from '@/repositories/menu'

export const actions:ActionTreeMap = {
  async [ActionTypes.GET_MENU] ({ commit }) {
    try {
      commit(MutationTypes.SET_LOADING, true)
      const { categories, items } = await load()
      commit(MutationTypes.SET_CATEGORIES, categories)
      commit(MutationTypes.SET_ITEMS, items)
    } catch (error) {
      console.log(error)
    } finally {
      commit(MutationTypes.SET_LOADING, false)
    }
  }
}
