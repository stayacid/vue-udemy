let data = {
  title: 'The VueJS Instance',
  showParagraph: false
}

// component
Vue.component('hello', {
  template: '<h1>It\'s component </h1>'
})

let vm1 = new Vue({
  el: '#app1',
  data: data,
  methods: {
    show() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)')
      this.$refs.myButton.innerText = 'test'
    },
    updateTitle(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title(value) {
      alert('Title changed. New Value: ' + value)
    }
  }
})

console.log(vm1.$data === data);
vm1.$refs.heading.innerText = 'something else'

//change prop from outside
setTimeout(() => {
  vm1.title = 'Changed by timer'
}, 3000);

//create a new prop (wont be reactive )
vm1.newProp = 'New!'

let vm2 = new Vue({
  data: {
    title: 'The VueJS Instance 2',
    showParagraph: false
  },
  methods: {
    onChange() {
      vm1.title = 'Changed !'
    }
  }
})

vm2.$mount('#app2')

// app 3 with hooks
let vm3 = new Vue({
  data: {
    title: 'Div3!'
  },
  template: `
    <div> 
      <h1> {{ title}} </h1>
      <button @click="title = 'Changed'">Change title</button>
      <button @click="destroy">Destroy</button>
    </div> `,
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeDestroy() {
    console.log('beforeDestroy()');
  },
  destroyed() {
    console.log('destroyed()');
  },
  methods: {
    destroy() {
      this.$destroy()
    }
  }
}).$mount('#app3')

