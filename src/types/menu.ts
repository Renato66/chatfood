export type MenuCategory = {
  id: string,
  name: string,
  url: string
}

export type MenuItem = {
  id: string,
  name: string,
  url: string,
  price: number,
  'discount_rate': number,
  stock: {
    availability: number,
  },
  description: string,
  photo: string,
  'category_id': string
}

export type MenuResponse = {
  categories: MenuCategory[],
  items: MenuItem[]
}
