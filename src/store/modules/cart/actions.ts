import { ActionTreeMap, ActionTypes, MutationTypes } from './types'
import { load } from '@/repositories/menu'

export const actions:ActionTreeMap = {
  async [ActionTypes.ADD_TO_CART] ({ commit }, item) {
    try {
      // commit(MutationTypes.SET_LOADING, true)
      // const { categories, items } = await saveItem()
      commit(MutationTypes.PUSH_ITEM, item)
    } catch (error) {
      console.log(error)
    } finally {
      // commit(MutationTypes.SET_LOADING, false)
    }
  }
}
