<template>
  <div class="wrapper">

      <section>
          <article v-for="(meet,index) in reviewArray" :key="index">
              {{meet.name}}
              {{meet.date}}
                 <input v-model="reviewText" placeholder="Write your review" type="text">
     <button  @click="addReview(meet)" class="mdc-button mdc-button--raised">Add your review</button>
          </article>
      </section>

 
  </div>
</template>

<script>
export default {
    props:{
        reviewArray:Array,
    },
    data:()=>{
        return {
            reviewText:"",
            tempArray:[],
        }
    },
    mounted:()=>{
        console.log("supp")
    },
    methods : {
        addReview(meet){
          console.log(meet);
         meet.review = this.reviewText;
         const storage = JSON.parse(window.localStorage.getItem("meet"));
         this.tempArray = storage;
         for(let item of this.tempArray){
            if(item.id ===meet.id) {
                item.review = this.reviewText;
                console.log(this.tempArray);
            }
         }
         
         window.localStorage.setItem("meet",JSON.stringify(this.tempArray));
        console.log(this.tempArray);
        this.$emit("closeThisB");
           
            
        }
    }
}
</script>

<style scoped>
.mdc-button  {
    background: #3792cb;
}

</style>