<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="">Username</label>
                    <input type="text" class="form-control" v-model="user.name">
                </div>
                <div class="form-group">
                    <label for="">Mail</label>
                    <input type="email" class="form-control" v-model="user.email">
                </div>
                <button class="btn-btn-primary" @click="submit">Submit</button>
                <hr>
                <input type="text" class="form-control" v-model="node">
                <br>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                    <ul class="list-group">
                        <li class="list-group-item" v-for="(u, index) in users" :key='index'>{{u.name}}: {{u.email}}</li>
                    </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    name: '',
                    email: ''
                },
                users: [],
                resource: {},
                node: 'data'
            }
        },
        methods: {
            submit() {
                /*this.$http.post('kek.json', this.user) // link is in main.js
                    .then(response => {
                    }, error => {
                        console.log(error);
                    });*/
                //this.resource.save({}, this.user)
                this.resource.saveAlt(this.user)
            },
            fetchData() {
                /*this.$http.get('kek.json')
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        this.users = Object.values(data);
                    })*/
                this.resource.getData({node: this.node})
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        this.users = Object.values(data);
                    })
            }
        },
        created() {
            const customActions = {
                saveAlt: {method: 'POST', url: 'alt.json'},
                getData: {method: 'GET'}
            }
            this.resource = this.$resource('{node}.json', {}, customActions)
        }
    }
</script>

<style>
</style>
