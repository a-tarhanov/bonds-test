import axios from 'axios'

export default {
  namespaced: true,
  state: {
    items: [],
    available: {
      currencies: ['USD', 'EUR', 'CAD'],
      display: ['Spread', 'Yield', '3MLSpread']
    },
    filter: {
      company: null,
      currency: 'USD',
      years: [],
      display: 'Spread'
    }
  },
  getters: {
    allQuotes: (state) => state.items.map(item => item.Quote).flat().filter(quote => quote),
    availableYears: (state, getters) => [
      ...new Set(
        getters.allQuotes
          .filter(item => item.Currency === state.filter.currency)
          .map(item => item.Years)
          .sort((a, b) => a - b)
      )
    ],
    availableTypes: (state, getters) => (year) => [
      ...new Set(
        getters.allQuotes
          .filter(item => item.Currency === state.filter.currency)
          .filter(item => item.Years === year)
          .map(item => item.CouponType)
          .sort()
      )
    ],
    filteredItems: (state) => {
      let items = state.items || []

      if (state.filter.company) {
        items = items.filter(item => item.Company.match(new RegExp(state.filter.company, 'i')))
      }

      return items.map(item => {
        let quotes = item.Quote || []

        if (state.filter.currency) {
          quotes = quotes.filter(quote => quote.Currency === state.filter.currency)
        }

        if (state.filter.years.length) {
          quotes = quotes.filter(quote => state.filter.years.includes(quote.Years))
        }

        return { ...item, Quote: quotes }
      })
    },
    sortFilterYears: (state) => state.filter.years.sort((a, b) => a - b)
  },
  mutations: {
    SET_ITEMS (state, items) {
      state.items = items
    },
    SET_FILTER (state, { type, value }) {
      state.filter[type] = value
    }
  },
  actions: {
    async fetchItems ({ commit }) {
      const { data } = await axios.get('data.json')

      commit('SET_ITEMS', data.Items || [])
    }
  }
}
