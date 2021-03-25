import { MenuItem } from '@/types/menu'
import { State } from './'

export enum MutationTypes {
  PUSH_ITEM = 'PUSH_ITEM',
}

export type Mutations<S = State> = {
  [MutationTypes.PUSH_ITEM](state: S, payload: MenuItem): void
}
