import Vuex from 'vuex'
//import blog from './modules/blog.store'

export const store = new Vuex.Store({
  modules: {
    // blog
  }
})
export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}
