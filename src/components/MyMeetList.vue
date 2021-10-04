<template>
  <div class="wrapper">
     <ReviewText v-if="toggler"  :placeHolder="placeHolder"/>
      <section v-else  class="card-container">
        <article v-for="(meets,index) in holderArray" :key="index" class="mdc-card mdc-card--outlined">
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
    props:{
        holderArray:Array,
    },
    data:()=>{
      return {
        toggler:false,
        placeHolder : [

        ]
        
      }
    },
    methods:{
      toggle(meets){
        this.toggler = !this.toggler;
       console.log(meets)
        this.placeHolder.push(meets);
        console.log(this.placeHolder);
      },
    
    }
}
</script>

<style scoped>
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