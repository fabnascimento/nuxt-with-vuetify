export const state = () => ({
  list: [],
  totalCount: 0,
  loading: true,
})

export const mutations = {
  setSites(state, sites) {
    state.list = sites
  },
  setSitesTotalCount(state, totalCount) {
    state.totalCount = totalCount
  },
  startLoading(state) {
    state.loading = true
  },
  endLoading(state) {
    state.loading = false
  },
}

export const actions = {
  async getSites({ commit }, page) {
    commit('startLoading')
    const sitesResult = await this.$axios.get(
      `http://localhost:3000/sites?_page=${page}&_limit=20`
    )
    const sitesList = sitesResult.data
    const totalCount = sitesResult.headers['x-total-count']
    commit('setSites', sitesList)
    commit('setSitesTotalCount', totalCount)
    commit('endLoading')
  },
}
