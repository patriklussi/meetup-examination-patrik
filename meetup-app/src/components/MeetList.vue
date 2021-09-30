<template>
  <div class="hello">
      <section class="card-container">
        <h1>Meetups in your area</h1>
        <article class="mdc-card mdc-card--outlined" v-for="(meets,index) in meetupList" :key="index">
         <h2>{{meets.name}}</h2> 
         <h5>{{meets.date}}</h5>
         <button  @click="addToLs(meets)" class="mdc-button mdc-button--raised">Sign on for meet</button>
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
      holderArray:[],
    }
  },
  methods:{
    addToLs(meets){
      

    if(this.holderArray.includes(meets)){
      console.log("suck");

    } else {
      this.holderArray.push(meets);
    }
    
      window.localStorage.setItem("meet",JSON.stringify(this.holderArray));
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h3 {
  margin: 40px 0 0;
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
  display: flex;
}

.mdc-card--outlined h2 {
  margin:0;
}

.mdc-card--outlined h5 {
  margin:0;
}
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.mdc-button {
  background: #3792cb;
  color: white;
}
</style>
