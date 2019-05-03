import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import IndexPage from '~/pages/index'
import store from '~/store/index'
import cloneDeep from 'lodash.clonedeep'
import { testNameToKey } from 'jest-snapshot/build/utils';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('pages/index.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = null
    wrapper = mount(IndexPage, {
      store: new Vuex.Store(cloneDeep(store)),
      localVue
    })
  })

  test('カウンターをクリックしたときに、カウント値が1加算される', () => {
    expect(wrapper.vm.count).toBe(0)
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})
