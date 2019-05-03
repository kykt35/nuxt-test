import AppToggleButton from '~/components/AppToggleButton.vue'
import { mount } from '@vue/test-utils'

describe('AppTgoleButton.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = null
    wrapper = mount(AppToggleButton)
  })
  test('デフォルト状態でoffであるか', () => {
    expect(wrapper.find('p').text()).toBe('off')
  })

  test('ボタンを押すことによって on となるか', () => {
    expect(wrapper.find('p').text()).toBe('off')
    
    wrapper.find('button').trigger('click')
    expect(wrapper.find('p').text()).toBe('on') 
  })
})
