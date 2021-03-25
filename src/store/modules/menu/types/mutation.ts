import { State } from './'

export enum MutationTypes {
  SET_LOADING = 'SET_LOADING',
}

export type Mutations<S = State> = {
  [MutationTypes.SET_LOADING](state: S, payload: boolean): void
}
