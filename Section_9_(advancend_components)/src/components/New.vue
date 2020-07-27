<template>
  <div>
    <h3>New quote</h3>
    <button @click="counter++">Increase counter</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  destroyed() {
    console.log('dead');
  },
  deactivated() {
    console.log('Deactivated');
  },
  activated() {
    console.log('Activated');
  },
}
</script>

<style scoped>

</style>