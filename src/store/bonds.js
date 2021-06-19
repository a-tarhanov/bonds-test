import axios from 'axios'

export default {
  namespaced: true,
  state: {
    items: [],
    available: {
      currencies: ['USD', 'EUR', 'CAD'],
      years: [5, 10, 40],
      display: ['Spread', 'Yield', '3MLSpread']
    },
    filter: {
      company: null,
      currency: 'USD',
      years: [5, 10, 40],
      display: 'Spread'
    }
  },
  getters: {
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

        if (state.filter.years) {
          quotes = quotes.filter(quote => state.filter.years.includes(quote.Years))
        }

        return { ...item, Quote: quotes }
      })
    }
  },
  mutations: {
    SET_ITEMS (state, items) {
      state.items = items
    }
  },
  actions: {
    async fetchItems ({ commit }) {
      const { data } = await axios.get('data.json')

      commit('SET_ITEMS', data.Items || [])
    }
  }
}
