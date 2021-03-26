import { MenuCategory, MenuItem } from '@/types/menu'
import { State } from './'

export enum MutationTypes {
  SET_LOADING = 'SET_LOADING',
  SET_CATEGORIES = 'SET_CATEGORIES',
  SET_ITEMS = 'SET_ITEMS'
}

export type Mutations<S = State> = {
  [MutationTypes.SET_LOADING](state: S, payload: boolean): void
  [MutationTypes.SET_CATEGORIES](state: S, payload: MenuCategory[]): void
  [MutationTypes.SET_ITEMS](state: S, payload: MenuItem[]): void
}
