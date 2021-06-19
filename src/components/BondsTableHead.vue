<template>
  <thead>
  <tr>
    <th colspan="3" class="border-0"></th>
    <th
      v-for="year in sortFilterYears"
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
    <template v-for="year in sortFilterYears">
      <th :key="`${year}-fix`" class="fw-normal text-black-50 text-center">FIX</th>
      <th :key="`${year}-frn`" class="fw-normal text-black-50 text-center">FRN</th>
    </template>
  </tr>
  </thead>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BondsTableHead',
  computed: {
    ...mapGetters('bonds', ['sortFilterYears'])
  }
}
</script>
