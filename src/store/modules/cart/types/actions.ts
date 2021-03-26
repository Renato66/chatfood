import { MenuItem } from '@/types/menu'
import { ActionContext, ActionTree } from 'vuex'
import { Mutations, State } from './'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  RETRIVE_CART = 'RETRIVE_CART',
  RESET_CART = 'RESET_CART',
  CHECK_AVAILABILITY = 'CHECK_AVAILABILITY'
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.ADD_TO_CART](
    { commit }: AugmentedActionContext, payload: MenuItem
  ): Promise<void>,
  [ActionTypes.RETRIVE_CART](
    { commit }: AugmentedActionContext
  ): void,
  [ActionTypes.RESET_CART](
    { commit }: AugmentedActionContext
  ): void,
  [ActionTypes.CHECK_AVAILABILITY](
    { getters }: AugmentedActionContext,
    payload: MenuItem
  ): Promise<boolean>,
}

export type ActionTreeMap = ActionTree<State, State> & Actions
