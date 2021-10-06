<template>
  <div class="hello">
      <section class="card-container">
        <article class="mdc-card mdc-card--outlined" v-for="(meets) in meetupList" :key="meets.id">
         <h2>{{meets.name}}</h2> 
         <p>{{meets.date}}</p>
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
      console.log(meets.signedup);
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

h3 {
  margin: 40px 0 0;
  color:#808080;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello {
  display: flex;
}

.card {
   height: 100px;
  width: 350px;
  background:grey;
  margin:0;
  display: flex;

}
.mdc-card--outlined{
    height: 200px;
  width: 450px;
  margin:10px;

  padding: 0.5rem;
}

.mdc-card--outlined h2 {
  margin:0;
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
}


</style>
