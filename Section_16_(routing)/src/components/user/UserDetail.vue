<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ id }}</p>
    <router-link tag="button" class="btn" :to="link">Edit user</router-link>
  </div>
</template>

<script>
  export default {
    props: ['id'],
    data() {
      return {
        link: {
          name: 'userEdit',
          query: {
            locale: 'en',
            q: 100
          },
          hash: '#data' // wiil open this hash
        }
      }
    },
    beforeRouteEnter(to, from, next) {
      console.log('user detail loaded');
      //this.link in not accessible at this point
      if (true) {
        next(vm => {
          //console.log(vm.link); // get acces to something
        })
      } else {
        next(false)
      }

    }
  }
</script>