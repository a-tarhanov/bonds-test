<template>
  <tfoot>
  <tr>
    <td colspan="2"></td>
    <td>Average by {{ filter.display }}</td>
    <template v-for="year in sortFilterYears">
      <td v-for="type in availableTypes(year)" :key="`${year}-${type}`" class="text-center">
        {{ averageValue(year, type, filter.display) | formatCharacteristic(filter.display) }}
      </td>
    </template>
  </tr>
  </tfoot>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'BondsTableFoot',
  computed: {
    ...mapState('bonds', ['filter']),
    ...mapGetters('bonds', ['sortFilterYears', 'availableTypes', 'averageValue'])
  }
}
</script>
