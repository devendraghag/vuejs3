const app = Vue.createApp({
  data() {
    return {
      // it return only object
      courseGoalA : "Finish the course and learn Vue JS",
      courseGoalB : "Master Vue JS",
    };
  },
  methods : {
    outputGoal(){
      const randomNumber = Math.random();
      if(randomNumber < 0.5){
        return this.courseGoalA;
      }else{
        return this.courseGoalB;
      }
    }
  }
});
app.mount("#user-goal");