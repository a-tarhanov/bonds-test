<template>
  <div class="container my-5">
    <BondsFilter></BondsFilter>
    <BondsTable></BondsTable>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { mapActions } from 'vuex'
import BondsTable from './components/BondsTable'
import BondsFilter from './components/BondsFilter'

export default {
  name: 'App',
  components: { BondsFilter, BondsTable },
  async mounted () {
    await this.fetchItems()
  },
  methods: {
    ...mapActions('bonds', ['fetchItems'])
  }
}
</script>
