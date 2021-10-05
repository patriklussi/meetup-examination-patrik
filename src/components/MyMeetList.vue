<template>
  <div class="wrapper">
    <h1>Your meetups!</h1>
     <ReviewText  v-if="toggler"  :reviewArray="reviewArray"/>
      <section v-else  class="card-container">
        <article v-for="(meets,index) in placeHolder" :key="index" class="mdc-card mdc-card--outlined">
        {{meets.name}}       
        {{meets.date}}
        <button v-on:click="toggle(meets)" class="mdc-button mdc-button--raised">Add review</button>
        </article>
      </section>
  </div>
</template>

<script>
import ReviewText from "./ReviewText.vue";

export default {
  components : {
    ReviewText,
  },
   
    data:()=>{
      return {
        toggler:false,
        placeHolder : [

        ],
        review:String,
        reviewArray:[],
      }
    },
    mounted(){
      const thingy = localStorage.meet;
      const getItems = JSON.parse(thingy);
      this.placeHolder = getItems;
     
    },
    methods:{
      toggle(meets){
       this.toggler=true;
         this.reviewArray.push(meets);
        
       console.log(meets)
      },
     
    
    }
}
</script>

<style scoped>

body {
  font-family: 'Rubik', sans-serif;
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