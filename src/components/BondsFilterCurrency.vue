<template>
  <div class="btn-group btn-group-sm me-4">
    <template v-for="currency in available.currencies">
      <input
        v-model="filter.currency"
        :value="currency"
        :id="`currency-${currency}`"
        :key="`${currency}-input`"
        type="radio"
        class="btn-check"
      >
      <label
        :for="`currency-${currency}`"
        :key="`${currency}-label`"
        class="btn btn-outline-primary"
      >
        {{ currency }}
      </label>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BondsFilterCurrency',
  computed: {
    ...mapState('bonds', ['filter', 'available'])
  }
}
</script>
