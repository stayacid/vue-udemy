<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server.id">Please, select a server</p>
        <p v-else> {{ server.status }}</p>
        <button @click="restoreStatus">Restore status</button>
    </div>

</template>

<script>
import { eventBus } from '../../main'
 export default {
     data() {
        return {
            server: {
                id: null,
                status: 'Server Details are currently not updated'
            }
        }

     },
     created() {
         eventBus.$on('statusGeted', (server) => {
            this.server = server
         })
     },
     methods: {
         restoreStatus() {
            this.server.status = 'Normal'
            //eventBus.$emit('statusRestored', this.server) //oh lol. i don't need to update servers object manually, because it's exist in memory once
         }
     }
 }
</script>

<style>

</style>
