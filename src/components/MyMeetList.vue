<template>
  <div class="wrapper">
    <p class="title">Meetups near you!</p>
     <ReviewText v-on:closeThisB="close"  v-if="toggler"  :reviewArray="reviewArray"/>
      <section v-else  class="card-container">
        <article v-for="(meets,index) in placeHolder" :key="index" class="mdc-card mdc-card--outlined">
        <h2 class="name">Name: {{meets.name}}</h2> 
         <p class="date">Date: {{meets.date}}</p>
        <p class="review">{{meets.review}}</p>
        <button v-if="!meets.review" v-on:click="toggle(meets)" class="mdc-button mdc-button--raised">Add review</button>
        <button class="mdc-button mdc-button--raised" @click="toggle(meets)" v-else>Modify review</button>
     

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
      close(){
        this.toggler =!this.toggler;
        this.reviewArray = [];
      },
     
     
    
    }
}
</script>

<style scoped>

body {
  font-family: 'Rubik', sans-serif;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mdc-card--outlined{
    height: 200px;
  width: 450px;
  margin:10px;
  display: flex;
   padding: 0.5rem;
  
}
.title {
  font-size:4rem;
  margin:0;
  margin: 2rem 0  2rem 0 ;
}


.date {
  font-size: 1.3rem;
  margin-right: auto;
}
.name {
  margin:0;
  margin-right:auto;
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