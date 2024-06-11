const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmName: "",
    };
  },
  methods: {
    // add() {
    //   this.counter = this.counter + 1;
    // },
    // reduce() {
    //   this.counter = this.counter - 1;
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm(event) {
      event.preventDefault();
      alert("Submitted");
    },
    confirmInput() {
      this.confirmName = this.name;
    },
  },
});

app.mount("#events");
