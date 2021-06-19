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
        <td :key="`${year}-fix`" class="text-center">{{ getValue(year, 'FIX', 'Spread') | spread }}</td>
        <td :key="`${year}-frn`" class="text-center">{{ getValue(year, 'FRN', 'Spread') | spread }}</td>
      </template>
    </tr>
    <tr v-show="quotes.length && active">
      <td></td>
      <td></td>
      <td>Yield</td>
      <template v-for="year in sortFilterYears">
        <td :key="`${year}-fix`" class="text-center">{{ getValue(year, 'FIX', 'Yield') | yield }}</td>
        <td :key="`${year}-frn`" class="text-center">{{ getValue(year, 'FRN', 'Yield') | yield }}</td>
      </template>
    </tr>
    <tr v-show="quotes.length && active">
      <td></td>
      <td></td>
      <td>3MLSpread</td>
      <template v-for="year in sortFilterYears">
        <td :key="`${year}-fix`" class="text-center">{{ getValue(year, 'FIX', '3MLSpread') | spread }}</td>
        <td :key="`${year}-frn`" class="text-center">{{ getValue(year, 'FRN', '3MLSpread') | spread }}</td>
      </template>
    </tr>
  </tbody>
</template>

<script>
import { mapGetters } from 'vuex'

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
    ...mapGetters('bonds', ['sortFilterYears']),
    dateSent: vm => vm.item.DateSent || null,
    companyName: vm => vm.item.Company || null,
    quotes: vm => vm.item.Quote || []
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
