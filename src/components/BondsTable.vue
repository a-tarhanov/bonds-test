<template>
  <table class="table table-sm">
    <BondsTableHead></BondsTableHead>
    <BondsTableItem
      v-for="item in filteredItems"
      :key="item.Id"
      :item="item"
    ></BondsTableItem>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'
import BondsTableItem from './BondsTableItem'
import BondsTableHead from './BondsTableHead'

export default {
  name: 'BondsTable',
  components: { BondsTableHead, BondsTableItem },
  computed: {
    ...mapGetters('bonds', ['filteredItems'])
  }
}
</script>
