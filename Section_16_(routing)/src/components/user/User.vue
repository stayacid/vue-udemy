<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <p>Loaded ID: {{ id }}</p>
        <button class="btn btn-primary" @click="navigateToHome">Go home</button>
        <hr>
        <router-view></router-view>
        <br>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        id: {
            type: String,
            default: 'Puk'
        }
    },
    methods: {
        navigateToHome() {
            this.$router.push({name: 'home'})
        }
    }
}
</script>