<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Default content</p>
                    </component>
                </keep-alive>

                <!-- <app-quote>
                    <h2 slot="title">{{ quoteTitle }}</h2>
                    <p>A wonderful quote</p>
                </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from "./components/Quotes.vue";
    import Author from "./components/Author.vue";
    import New from "./components/New.vue";
    export default {
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        },
        data() {
            return {
                quoteTitle: 'The quote',
                selectedComponent: 'appQuote'
            }
        }
    }
</script>

<style scoped>
    h2 {
        color: red;
    }
</style>
