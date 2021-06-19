<template>
  <div class="btn-group btn-group-sm me-4">
    <template v-for="display in available.display">
      <input
        v-model="filter.display"
        :value="display"
        :id="`display-${display}`"
        :key="`${display}-input`"
        type="radio"
        class="btn-check"
      >
      <label
        :for="`display-${display}`"
        :key="`${display}-label`"
        class="btn btn-outline-primary"
      >
        {{ display }}
      </label>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BondsFilterDisplay',
  computed: {
    ...mapState('bonds', ['filter', 'available'])
  }
}
</script>
