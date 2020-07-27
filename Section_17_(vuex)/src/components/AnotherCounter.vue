<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 1000})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 1000})">Decrement</button>
    </div>
</template>

<script>
    //import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        methods: {
            /*...mapMutations([
                'increment',
                'decrement'
            ])*/
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ])
        }
    }
</script>