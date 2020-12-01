export const state = () => ({
  userData: {},
})

export const mutations = {
  setUserData(state, userData) {
    state.userData = userData
  },
}

export const actions = {
  async getUserData({ commit }) {
    const userData = await this.$axios.$get('')
    commit('setUserData', userData)
  },
}
