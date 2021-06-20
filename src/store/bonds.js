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
    },
    sort: {
      column: 'date',
      order: 'desc'
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
      let items = [...state.items]

      items.sort((a, b) => {
        if (!a.Quote?.length && b.Quote?.length) {
          return 1
        }

        let compare = 0

        if (state.sort.column === 'company' && state.sort.order === 'asc') {
          compare = a.Company.localeCompare(b.Company)
        }

        if (state.sort.column === 'company' && state.sort.order === 'desc') {
          compare = b.Company.localeCompare(a.Company)
        }

        if (state.sort.column === 'date' && state.sort.order === 'asc') {
          compare = new Date(a.DateSent) - new Date(b.DateSent)
        }

        if (state.sort.column === 'date' && state.sort.order === 'desc') {
          compare = new Date(b.DateSent) - new Date(a.DateSent)
        }

        if (compare === 0) {
          compare = b.Preferred - a.Preferred
        }

        return compare
      })

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
    columnValues: (state, getters) => (year, type, display) => {
      let values = []

      getters.filteredItems.forEach(item => {
        item.Quote
          .filter(quote => quote.Years === year && quote.CouponType === type)
          .forEach(quote => {
            if (quote[display]) {
              values.push(quote[display])
            }
          })
      })

      return values
    },
    minimumValue: (state, getters) => (year, type, display) => Math.min(...getters.columnValues(year, type, display)),
    averageValue: (state, getters) => (year, type, display) => {
      const values = getters.columnValues(year, type, display)

      if (!values.length) {
        return
      }

      return values.reduce((acc, value) => acc + value) / values.length
    },
    sortFilterYears: (state) => state.filter.years.sort((a, b) => a - b)
  },
  mutations: {
    SET_ITEMS (state, items) {
      state.items = items
    },
    SET_FILTER (state, { type, value }) {
      state.filter[type] = value
    },
    SET_SORT (state, { column, order }) {
      state.sort.column = column
      state.sort.order = order
    }
  },
  actions: {
    async fetchItems ({ commit }) {
      const { data } = await axios.get('data.json')

      commit('SET_ITEMS', data.Items || [])
    }
  }
}
