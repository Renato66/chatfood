import { compareStrings } from '@/helpers/utils'
import { MenuResponse } from '@/types/menu'
import { AxiosResponse } from 'axios'
import http from './clients/axios'
const resource = '/menu'

export const load = async (): Promise<MenuResponse> => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const { data: response } = await http.get(`${resource}/index.json`) as AxiosResponse<MenuResponse>
  return response
}

export const search = async (input: string): Promise<MenuResponse> => {
  const apiResponse = await load()
  const compareInput = compareStrings(input)
  const items = apiResponse.items.filter(item => compareInput(`${item.name} ${item.description}`))
  const response = {
    categories: apiResponse.categories.filter(category => items.some(item => category.id === item.category_id)),
    items
  } as MenuResponse
  // const { data: response } = await http.get(`${resource}/?q=${input}`) as AxiosResponse<MenuResponse>;
  return response
}
