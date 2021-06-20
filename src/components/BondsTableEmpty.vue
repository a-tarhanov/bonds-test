<template>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td class="text-muted" colspan="3">Nothing found</td>
      <template v-for="year in sortFilterYears">
        <td
          v-for="type in availableTypes(year)"
          :key="`${year}-${type}`"
        ></td>
      </template>
    </tr>
  </tbody>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'BondsTableEmpty',
  computed: {
    ...mapGetters('bonds', ['sortFilterYears', 'availableTypes'])
  }
}
</script>
