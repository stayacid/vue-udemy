<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User age: {{ userAge }} </p>
        <button @click='resetName'>Reset Name by custom Event</button>
        <button @click='resetFn()'>Reset Name by Callback</button>
    </div>
</template>

<script>
    import {eventBus} from '../main'

    export default {
        props: {
            myName: {
                type: String,
                //required: true, //no nedd to 'required if we have 'default
                default: 'Max' //if type == Object or Array 'default' should be a function with returning an object
            },
            resetFn: Function,
            userAge: Number
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("")
            },
            resetName() {
                //this.myName = 'Max' // if prop type == Object/Array, this function also change 'name' in parent component. Changing data from child is bad practice!
                this.$emit('nameWasReset', 'Max')
            }
        }, 
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>

