import Vue from 'vue'

import dayjs from 'dayjs'

Vue.filter('date', (value) => {
  if (!value) {
    return
  }

  return dayjs(value).format('DD-MMM-YY')
})

Vue.filter('spread', (value) => {
  if (!value) {
    return
  }

  return value > 0 ? `+${value}bp` : `${value}bp`
})

Vue.filter('yield', (value) => {
  if (!value) {
    return
  }

  return `${value.toFixed(3)}%`
})
