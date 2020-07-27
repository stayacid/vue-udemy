<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <b>App-Result</b>
                <app-result></app-result>
                <b>App Another Result</b>
                <app-another-result></app-another-result>
                <hr>
                <b>App Counter</b>
                <app-counter></app-counter>
                <br>
                <b>App Another Counter</b>
                <app-another-counter></app-another-counter>
                <br>
                <!-- <input type="text" class="form-input" :value="value " @input="updateValue"> -->
                <input type="text" class="form-input" v-model="value">
                <p>{{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';
    import AnotherCounter from './components/AnotherCounter.vue';

    export default {
        computed: {
            /*value() {
                return this.$store.getters.value
            }*/
            value: {
                get() {
                    return this.$store.getters.value
                },
                set(value) {
                    this.$store.dispatch('updateValue', value)
                }
            }
        },
        methods: {
            updateValue(event) {
                this.$store.dispatch('updateValue', event.target.value)
            }
        },
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnotherResult: AnotherResult,
            appAnotherCounter: AnotherCounter,
        }
    }
</script>

