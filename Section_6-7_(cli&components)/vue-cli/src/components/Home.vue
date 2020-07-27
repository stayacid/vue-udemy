<template lang="pug">
  div
    app-server-status(v-for='server in 5' :key='server')
</template>

<script>
  import ServerStatus from './ServerStatus'
  export default {
    components: {
      'app-server-status': ServerStatus
    }
  }
</script>

<style lang="scss" scoped>

</style>