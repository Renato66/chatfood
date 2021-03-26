import { shallowMount } from '@vue/test-utils'
import ItemCard from '@/components/ItemCard.vue'
import { MenuItem } from '@/types/menu'

const cheeseBurguer = {
  id: '2',
  name: 'Cheese Burger',
  url: 'cheese-burger',
  price: 1500,
  discount_rate: 0.2,
  stock: {
    availability: 1
  },
  description: 'Very nice cheese burger.',
  photo: 'https://chatfood-cdn.s3.eu-central-1.amazonaws.com/fe-code-challenge-1/cheese-burger.jpg',
  category_id: '1'
} as MenuItem

const mocks = {
  $i18n: {
    locale: () => { return process.env.VUE_APP_I18N_LOCALE || 'en' }
  }
}

describe('ItemCard.vue', () => {
  it('renders props.item when passed', async () => {
    const wrapper = shallowMount(ItemCard, {
      propsData: { item: cheeseBurguer },
      mocks
    })
    expect(wrapper.get('.cf-card__title').text()).toBe('Cheese Burger')
    expect(wrapper.get('.cf-card__description').text()).toBe('Very nice cheese burger.')
    expect(wrapper.get('.cf-card__price div:first-child').text()).toBe('AED\u00a01.200,00')
    expect(wrapper.get('.cf-card__price div:last-child').text()).toBe('AED\u00a01.500,00')
    expect(wrapper.find('.cf-card__image img').exists()).toBe(true)
  })

  it('should not render image', async () => {
    const wrapper = shallowMount(ItemCard, {
      propsData: { item: {
        ...cheeseBurguer,
        photo: undefined
      } },
      mocks
    })
    expect(wrapper.find('.cf-card__image img').exists()).toBe(false)
  })

  it('should emit click event with item', async () => {
    const wrapper = shallowMount(ItemCard, {
      propsData: { item: cheeseBurguer },
      mocks
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
    //@ts-ignore
    expect(JSON.stringify(wrapper.emitted().click[0][0])).toBe(JSON.stringify(cheeseBurguer))
  })
})

