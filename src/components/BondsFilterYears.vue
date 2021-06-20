<template>
  <div class="btn-group btn-group-sm me-4">
    <template v-for="year in availableYears">
      <input
        v-model="filter.years"
        :value="year"
        :id="`year-${year}`"
        :key="`${year}-input`"
        type="checkbox"
        class="btn-check"
      >
      <label
        :for="`year-${year}`"
        :key="`${year}-label`"
        class="btn btn-outline-primary"
      >
        {{ year }} YRS
      </label>
    </template>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'BondsFilterYears',
  computed: {
    ...mapState('bonds', ['filter']),
    ...mapGetters('bonds', ['availableYears'])
  },
  watch: {
    availableYears (value) {
      this.SET_FILTER({ type: 'years', value })
    }
  },
  methods: {
    ...mapMutations('bonds', ['SET_FILTER'])
  }
}
</script>
