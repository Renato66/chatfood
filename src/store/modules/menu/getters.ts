import { GetterTree } from 'vuex'
import { Getters, State } from './types'

export const getters: GetterTree<State, State> & Getters = {
  loading: (state) => {
    return state.loading
  },
  itemsList: (state) => {
    return state.items
  },
  categoriesItemsList: (state) => {
    return state.categories.map(category => {
      return {
        ...category,
        items: state.items.filter(item => item.category_id === category.id)
      }
    })
  }
}
