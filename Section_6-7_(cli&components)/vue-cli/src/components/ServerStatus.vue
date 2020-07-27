<template lang="pug">
  div
    p Server status: {{status}}
    hr
    button(@click='changeStatus') Change status
</template>

<script>
  export default {
    data() {
      return {
        status: 'Critical'
      }
    },
    methods: {
      changeStatus() {
        this.status = 'Normal'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>