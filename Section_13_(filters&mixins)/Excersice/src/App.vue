<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>{{'Local filter' | reverse}}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>{{ 'Global filter' | length}}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <p>{{ reverseComputed }}</p>
                <p>{{ lengthComputed }} </p>


                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <p>{{ lengthFromMixin }} from mixin</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { lengthMixin } from './lengthMixin'
    export default {
        mixins: [lengthMixin],
        data() {
            return {
                text: 'Reverse Computed',
                text2: 'Length computed'
            }
        },
        filters: {
            reverse(value) {
                return value.split("").reverse().join("");
            }
        },
        computed: {
            reverseComputed() {
                return this.text.split("").reverse().join("");
            },
            lengthComputed() {
                return this.text2 + ' ' + '(' + this.text2.length +')';
            }
        }
    }
</script>

<style>
</style>
