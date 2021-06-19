<template>
  <div class="my-4">
    <div class="d-flex flex-row justify-content-start align-items-center my-4">
      <BondsFilterCurrency></BondsFilterCurrency>
      <BondsFilterYears></BondsFilterYears>
      <BondsFilterDisplay></BondsFilterDisplay>
    </div>
    <div class="my-4">
      <BondsFilterSearch></BondsFilterSearch>
    </div>
  </div>
</template>

<script>
import BondsFilterCurrency from './BondsFilterCurrency'
import BondsFilterYears from './BondsFilterYears'
import BondsFilterDisplay from './BondsFilterDisplay'
import BondsFilterSearch from './BondsFilterSearch'

export default {
  name: 'BondsFilter',
  components: {
    BondsFilterSearch,
    BondsFilterDisplay,
    BondsFilterYears,
    BondsFilterCurrency
  }
}
</script>
