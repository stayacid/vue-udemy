<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                this.$store.state.counter.counter++ // we need module name only if we accessing store in module
                // strange - it's not updating state in vue dev tools
            },
            decrement() {
                this.$store.state.counter.counter--
            }
        }
    }
</script>