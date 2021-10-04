<template>
  <div class="wrapper">

      <section>
          <article v-for="(meet,index) in placeHolder" :key="index">
              {{meet.name}}
              {{meet.date}}
          </article>
      </section>

     <input placeholder="Write your review" type="text">
     <button  @click="addReview" class="mdc-button mdc-button--raised">Add your review</button>
  </div>
</template>

<script>
export default {
    props:{
        placeHolder:Array,
    },
    data:()=>{
        
    },
    methods : {
        addReview(){

        }
    }
}
</script>

<style scoped>
.mdc-button  {
    background: #3792cb;
}

</style>