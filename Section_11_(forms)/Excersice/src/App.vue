<template>
    <div class="container">
        <form v-if="!isSubmitted" >
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <app-fullname v-model="fullName"/>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email"
                            id="email"
                            class="form-control"
                            v-model="email"
                            >
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password"
                            id="password"
                            class="form-control"
                            v-model="password"
                            >
                    </div>
                    <div class="form-group">
                        <span>Store Data? </span>
                        <label for="yesStore">
                            <input
                                    type="radio"
                                    id="yesStore"
                                    value="yes"
                                    v-model="storeData"> Yes
                        </label>
                        <label for="noStore">
                            <input
                                    type="radio"
                                    id="noStore"
                                    value="no"
                                    v-model="storeData"> No
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary" @click.prevent="submitted">Submit</button>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName}}</p>
                        <p>Mail: {{email}}</p>
                        <p>Password: {{password}} </p>
                        <p>Store in Database?: {{storeData}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Fullname from './FullName.vue'
    export default {
        components: {
            appFullname: Fullname
        },
        data() {
            return {
                fullName: 'Ivan Z',
                 email: '',
                 password: '',
                 storeData: 'yes',
                 isSubmitted: false,
            }
        },
         methods: {
             submitted() {
                 this.isSubmitted = true
             }
         }
    }
</script>

<style>
</style>
