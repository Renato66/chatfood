import { shallowMount } from '@vue/test-utils'
import BaseIcon from '@/components/core/BaseIcon.vue'
import flushPromises from 'flush-promises'

describe('BaseIcon.vue', () => {
  it('renders props.icon when passed', async () => {
    const icon = 'mdiArrowLeft'
    const wrapper = shallowMount(BaseIcon, {
      propsData: { icon }
    })
    await flushPromises()
    expect(wrapper.html()).not.toBe('')
  })

  it('should warn when icon is not found', async () => {
    const icon = 'notFoundMdiIcon'
    const spy = jest.spyOn(console, 'warn').mockImplementation();
    const wrapper = shallowMount(BaseIcon, {
      propsData: { icon }
    })
    await flushPromises()
    expect(console.warn).toHaveBeenCalledTimes(1)
    expect(wrapper.html()).toBe('')
    spy.mockRestore();
  })
})
