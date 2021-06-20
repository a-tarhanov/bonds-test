<template>
  <tbody>
    <tr>
      <td class="chevron-cell">
        <div
          v-if="quotes.length"
          @click="active = !active"
        >
          <i v-if="active" class="bi bi-chevron-up"></i>
          <i v-else class="bi bi-chevron-down"></i>
        </div>
      </td>
      <td>
        <template v-if="quotes.length">
          {{ dateSent | date }}
        </template>
      </td>
      <td class="fw-bold" :class="{ 'text-muted': !quotes.length }">{{ companyName }}</td>
      <template v-for="year in sortFilterYears">
        <td
          v-for="type in availableTypes(year)"
          :key="`${year}-${type}`"
          class="text-center"
          :class="{ 'bg-warning': minimumValue(year, type, filter.display) === getValue(year, type, filter.display) }"
        >
          {{ getValue(year, type, filter.display) | formatCharacteristic(filter.display) }}
        </td>
      </template>
    </tr>
    <template v-for="characteristic in otherCharacteristics">
      <tr v-show="quotes.length && active" :key="characteristic">
        <td></td>
        <td></td>
        <td>{{ characteristic }}</td>
        <template v-for="year in sortFilterYears">
          <td v-for="type in availableTypes(year)" :key="`${year}-${type}`" class="text-center">
            {{ getValue(year, type, characteristic) | formatCharacteristic(characteristic) }}
          </td>
        </template>
      </tr>
    </template>
  </tbody>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'BondsTableItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    active: false
  }),
  computed: {
    ...mapState('bonds', ['available', 'filter']),
    ...mapGetters('bonds', ['sortFilterYears', 'availableTypes', 'minimumValue']),
    dateSent: vm => vm.item.DateSent || null,
    companyName: vm => vm.item.Company || null,
    quotes: vm => vm.item.Quote || [],
    otherCharacteristics: vm => vm.available.display.filter(item => item !== vm.filter.display)
  },
  methods: {
    getValue (year, type, display) {
      const quote = this.quotes.find(quote => quote.Years === year && quote.CouponType === type) || {}

      return quote[display] || null
    }
  }
}
</script>

<style scoped>
tbody > tr > td {
  border-bottom-color: inherit !important;
}

.chevron-cell {
  width: 0;
}

.chevron-cell > div {
  cursor: pointer;
}
</style>
