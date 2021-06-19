<template>
  <div class="container mt-5">
    <BondsTable></BondsTable>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { mapActions } from 'vuex'
import BondsTable from './components/BondsTable'

export default {
  name: 'App',
  components: { BondsTable },
  async mounted () {
    await this.fetchItems()
  },
  methods: {
    ...mapActions('bonds', ['fetchItems'])
  }
}
</script>
