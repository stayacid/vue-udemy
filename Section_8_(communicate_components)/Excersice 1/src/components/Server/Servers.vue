<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <server-item 
                class="list-group-item"
                v-for="server in servers" 
                :key="server.id"
                :server="server"/>
        </ul>
    </div>
</template>

<script>
    import ServerItem from './ServerItem.vue';
    import {eventBus} from '../../main';

    export default {
        components: {
            ServerItem
        },
        data() {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id: 4, status: 'Fine'},
                    {id: 5, status: 'OK'}
                ]
            }
        }
    }
</script>

<style>

</style>
