<template>
    <div class="container">
        <appHeader/>
        <hr>
        <div class="row">
            <server-list/>
            <server-details/>
        </div>
        <hr>
        <appFooter/>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'

    export default {
        components: {
            appHeader: Header,
            appFooter: Footer
        }
    }
</script>

<style>

</style>
