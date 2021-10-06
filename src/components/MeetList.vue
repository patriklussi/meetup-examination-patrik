<template>
  <div class="hello">
        <p class="title">Meetups near you!</p>
      <section class="card-container">
        <article class="mdc-card mdc-card--outlined" v-for="(meets) in meetupList" :key="meets.id">
         <h2 class="name">Name: {{meets.name}}</h2> 
         <p class="date">Date: {{meets.date}}</p>
         <button v-if="!meets.signedup"  @click="addToLs(meets)" class="mdc-button mdc-button--raised">Sign on for meet</button>
         <button v-else class="mdc-button dissapointment"   @click="removeFunc(meets)" >Cancel</button>
         </article>
      </section>
  </div>
</template>

<script>
export default {
  name: "MeetList",
  props: {
    meetupList:Array,
  },
  data:()=>{
    return {
     
   
   
    }
  },
  
  methods:{
    addToLs(meets){
 
      meets.signedup = !meets.signedup;
      this.$emit("addToLs",meets);
     
  
    },
    removeFunc(meets){
     meets.signedup = !meets.signedup;
      this.$emit("deleteLs",meets);
     
     

      
     
  
    } 
    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    font-family: 'Rubik', sans-serif;
}

h3 {
  margin: 40px 0 0;
  color:#808080;
}

a {
  color: #42b983;
}
.date {
  font-size: 1.3rem;
  margin-right: auto;
}
.title {
  font-size:4rem;
  margin:0;
  margin: 2rem 0  2rem 0 ;
}
.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.name {
  margin:0;
  margin-right:auto;
}

.mdc-card {
 justify-content: left;
}
.mdc-card--outlined{
    height: 200px;
  width: 450px;
  margin:10px;
  
  justify-content: left;
  padding: 0.5rem;
 
}


.mdc-card--outlined h5 {
  margin:0;
}
.card-container {
      display: grid;
    grid-template-columns: repeat(2,4fr);
    gap: 0.1rem;
    padding: 1rem;
   
}
.mdc-button {
  background: #3792cb;
  color: white;
  margin-top:auto;
  margin-bottom: 1rem;
  padding: 1rem;
  

 
 
}


</style>
