<template>
  <span class="sorted-column">
    <span
      v-if="sort.column === column"
      @click="SET_SORT({ column, order: sort.order === 'asc' ? 'desc' : 'asc' })"
    >
      {{ name }}
      <i class="bi bi-caret-down-fill text-dark" v-if="sort.order === 'desc'"></i>
      <i class="bi bi-caret-up-fill text-dark" v-else></i>
    </span>
    <span v-else @click="SET_SORT({ column, order: 'asc' })">
      {{ name }}
      <i class="bi bi-caret-up-fill text-muted"></i>
    </span>
  </span>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'BondsTableHeadSort',
  props: {
    name: {
      type: String,
      required: true
    },
    column: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState('bonds', ['sort']),
  },
  methods: {
    ...mapMutations('bonds', ['SET_SORT'])
  }
}
</script>

<style scoped>
.sorted-column {
  cursor: pointer;
}
</style>
