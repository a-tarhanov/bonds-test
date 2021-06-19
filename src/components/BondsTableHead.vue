<template>
  <thead>
  <tr>
    <th colspan="3" class="border-0"></th>
    <th
      v-for="year in filter.years"
      :key="year"
      class="text-center"
      colspan="2"
    >
      {{ year }} YRS
    </th>
  </tr>
  <tr>
    <th class="fw-normal text-black-50"></th>
    <th class="fw-normal text-black-50">DATE SENT</th>
    <th class="fw-normal text-black-50">COMPANY</th>
    <template v-for="year in filter.years">
      <th :key="`${year}FIX`" class="fw-normal text-black-50 text-center">FIX</th>
      <th :key="`${year}FRN`" class="fw-normal text-black-50 text-center">FRN</th>
    </template>
  </tr>
  </thead>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BondsTableHead',
  computed: {
    ...mapState('bonds', ['filter'])
  }
}
</script>
