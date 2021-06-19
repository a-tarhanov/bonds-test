<template>
  <div class="row">
    <div class="col-4">
      <input
        v-model="filter.company"
        type="text"
        class="form-control"
        placeholder="Filter by company name..."
      >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BondsFilterSearch',
  computed: {
    ...mapState('bonds', ['filter'])
  }
}
</script>
