<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of clicks: {{ clickCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types';

    export default {
        /*computed: {
            counter() { //simple getting poperty from vuex store
                return this.$store.getters.doubleCounter
            },
            clicks() {
                return this.$store.getters.stringCounter
            }
        }*/
        computed: {
            /*...mapGetters([ //spread operator require 'babel-preset-stage-2' and ["stage-2"] in .babelrc, but we can add another computed properties
            'doubleCounter',
            'stringCounter'
            ]),*/
            ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,
                clickCounter: types.CLICK_COUNTER
            }),
            smthng() {
                return null
            }
        }
        /*computed: mapGetters({ // rename getters from mapGetters
            dbl: 'doubleCounter',
            str: 'stringCounter'
        })*/
        

    }
</script>