<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <span>
        <slot name="subtitle">The subtitle</slot>
      </span>
    </div>
    <hr>
    <div>
      <slot></slot> <!-- here will be unnamed part of slot -->
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }

  h2 {
    color: blue;
  }

  .title {
    font-style: italic;
  }
</style>