<template>
  <li @click="getStatus">Server #{{ server.id }} </li>
</template>

<script>
import { eventBus } from '../../../src/main'
  export default {
    props: {
      server: Object
    },
    methods: {
      getStatus() {
        eventBus.getServerStatus(this.server)
      }
    }
  }
</script>

<style scoped>
  li {
    cursor: pointer;
  }
</style>