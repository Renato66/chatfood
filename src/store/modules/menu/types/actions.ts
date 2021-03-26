import { ActionContext, ActionTree } from 'vuex'
import { Mutations, State } from './'

export enum ActionTypes {
  GET_MENU = 'GET_MENU',
  SEARCH_MENU = 'SEARCH_MENU'
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.GET_MENU](
    { commit }: AugmentedActionContext
  ): Promise<boolean | void>
  [ActionTypes.SEARCH_MENU](
    { commit }: AugmentedActionContext,
    payload: string
  ): Promise<boolean | void>
}

export type ActionTreeMap = ActionTree<State, State> & Actions
