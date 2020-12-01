export const state = () => ({
  list: [],
})

export const mutations = {
  setSites(state, sites) {
    state.list = sites
  },
}

export const actions = {
  async getSites({ commit }) {
    const sitesList = await this.$axios.$get('')
    commit('setSites', sitesList)
  },
}
