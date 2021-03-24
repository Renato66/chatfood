import { shallowMount } from '@vue/test-utils'
import BaseButton from '@/components/core/BaseButton.vue'
import flushPromises from 'flush-promises'

describe('BaseButton.vue', () => {
  it('renders props.icon when passed', async () => {
    const icon = 'mdiArrowLeft'
    const wrapper = shallowMount(BaseButton, {
      propsData: { icon }
    })
    await flushPromises()
    expect(wrapper.html()).not.toBe('')
  })

  it('should warn when icon is not found', async () => {
    const icon = 'notFoundMdiIcon'
    const spy = jest.spyOn(console, 'warn').mockImplementation();
    const wrapper = shallowMount(BaseButton, {
      propsData: { icon }
    })
    await flushPromises()
    expect(console.warn).toHaveBeenCalledTimes(1)
    expect(wrapper.text()).toBe(``)
    spy.mockRestore();
  })

  it('should emit click event', async () => {
    const icon = 'mdiArrowLeft'
    const wrapper = shallowMount(BaseButton, {
      propsData: { icon }
    })
    await flushPromises()
    await wrapper.trigger('click', {
      button: 0
    })
    expect(wrapper.emitted().click).toBeTruthy()
  })

 
})
