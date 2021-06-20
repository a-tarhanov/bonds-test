<template>
  <thead>
  <tr>
    <th colspan="3" class="border-0"></th>
    <th
      v-for="year in sortFilterYears"
      :key="year"
      class="text-center"
      :colspan="availableTypes(year).length"
    >
      {{ year }} YRS
    </th>
  </tr>
  <tr>
    <th class="fw-normal text-black-50"></th>
    <th class="fw-normal text-black-50">
      <BondsTableHeadSort name="DATE SENT" column="date"></BondsTableHeadSort>
    </th>
    <th class="fw-normal text-black-50">
      <BondsTableHeadSort name="COMPANY" column="company"></BondsTableHeadSort>
    </th>
    <template v-for="year in sortFilterYears">
      <th v-for="type in availableTypes(year)" :key="`${year}-${type}`" class="fw-normal text-black-50 text-center">
        {{ type }}
      </th>
    </template>
  </tr>
  </thead>
</template>

<script>
import { mapGetters } from 'vuex'
import BondsTableHeadSort from './BondsTableHeadSort'

export default {
  name: 'BondsTableHead',
  components: { BondsTableHeadSort },
  computed: {
    ...mapGetters('bonds', ['sortFilterYears', 'availableTypes'])
  }
}
</script>
