import { compareStrings } from '@/helpers/utils/compareStrings'
import { MenuResponse } from '@/types/menu'
import { AxiosResponse } from 'axios'
import http from './clients/axios'
const resource = '/menu'

const load = async (): Promise<MenuResponse> => {
  const { data: response } = await http.get(`${resource}`) as AxiosResponse<MenuResponse>
  return response
}

const search = async (input: string): Promise<MenuResponse> => {
  // const { data: response } = await http.get(`${resource}/?q=${input}`) as AxiosResponse<MenuResponse>;
  const response = await load()
  const compareInput = compareStrings(input)
  return {
    categories: response.categories,
    items: response.items.filter(elem => compareInput(`${elem.name} ${elem.description}`))
  } as MenuResponse
}

export default {
  load,
  search
}
