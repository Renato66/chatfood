import { MenuItem } from '@/types/menu'
import { ActionContext, ActionTree } from 'vuex'
import { Mutations, State } from './'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.ADD_TO_CART](
    { commit }: AugmentedActionContext, item: MenuItem
  ): Promise<boolean | void>
}

export type ActionTreeMap = ActionTree<State, State> & Actions
