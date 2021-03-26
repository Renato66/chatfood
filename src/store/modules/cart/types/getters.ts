import { State } from './'

export type Getters = {
  cartItemsListQuantity(state: State): { [key: string]: number }
}
