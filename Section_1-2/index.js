new Vue({
  el: '#app',
  data: {
    title: 'Hello world',
    link: 'https://google.com',
    finishedLink: `<a href="https://google.com">Google</a>`,
    counter: 0,
    x: 0,
    y: 0,
    name: 'Max',
    counter: 0,
    secondCounter: 0,
    attachRed: false,
    color: 'green',
    width: 100
  },
  methods: {
    sayHello: function () {
      this.title = 'Hello'
      return this.title;
    },
    changeTitle: function (event) {
      this.title = event.target.value;
    },
    increase: function (step, event) {
      this.counter += step;
    },
    updateCoordinates: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function () {
      alert("Alert!")
    },
    result: function () {
      console.log("methods");
      return this.counter > 5 ? 'Greater 5' : 'Smaller 5'
    }
  },
  computed: {
    output() {
      console.log("computed");
      return this.counter > 5 ? 'Greater 5' : 'Smaller 5'
    },
    divClasses() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      }
    },
    myStyle() {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    }
  },
  watch: {
    counter: function (value) {
      let vm = this;
      setTimeout(function () {
        vm.counter = 0;
      }, 2000)
    }
  }
})