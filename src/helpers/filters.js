import Vue from 'vue'

import dayjs from 'dayjs'

Vue.filter('date', (value) => {
  if (!value) {
    return
  }

  return dayjs(value).format('DD-MMM-YY')
})

Vue.filter('formatCharacteristic', (value, type) => {
  if (!value) {
    return
  }

  if (type === 'Spread' || type === '3MLSpread') {
    return value > 0 ? `+${value.toFixed(0)}bp` : `${value.toFixed(0)}bp`
  }

  if (type === 'Yield') {
    return `${value.toFixed(3)}%`
  }
})
