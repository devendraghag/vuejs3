const app = Vue.createApp({
  data() {
    return {
      // it return only object
      courseGoal : "Finish the course and learn Vue JS",
      vueLink : "https://vuejs.org/"
    };
  },
  methods : {
    outputGoal(){
      const randomNumber = Math.random();
      if(randomNumber < 0.5){
        return "Master Vue JS";
      }else{
        return "Learn Vue JS";
      }
    }
  }
});
app.mount("#user-goal");