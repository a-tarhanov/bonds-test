<template>
  <table class="table table-sm">
    <BondsTableHead></BondsTableHead>
    <BondsTableItem
      v-for="item in filteredItems"
      :key="item.Id"
      :item="item"
    ></BondsTableItem>
    <BondsTableFoot></BondsTableFoot>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'
import BondsTableItem from './BondsTableItem'
import BondsTableHead from './BondsTableHead'
import BondsTableFoot from './BondsTableFoot'

export default {
  name: 'BondsTable',
  components: {
    BondsTableFoot,
    BondsTableHead,
    BondsTableItem
  },
  computed: {
    ...mapGetters('bonds', ['filteredItems'])
  }
}
</script>

<style>
.table > tfoot {
  border: 1px solid black !important;
}

.table > tbody > tr > td {
  border-bottom-color: inherit !important;
}

.table > tbody:last-of-type > tr > td {
  border-bottom-width: 0 !important;
}
</style>
