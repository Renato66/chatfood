import { MenuItem } from '@/types/menu'
import { ActionContext, ActionTree } from 'vuex'
import { Mutations, State } from './'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  RETRIVE_CART = 'RETRIVE_CART',
  RESET_CART = 'RESET_CART'
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
  ): void,
  [ActionTypes.RETRIVE_CART](
    { commit }: AugmentedActionContext
  ): void,
  [ActionTypes.RESET_CART](
    { commit }: AugmentedActionContext
  ): void
}

export type ActionTreeMap = ActionTree<State, State> & Actions
