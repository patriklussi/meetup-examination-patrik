<template>
  <div class="wrapper">

      <section>
          <article class="mdc-card mdc-card--outlined" v-for="(meet,index) in reviewArray" :key="index">
              {{meet.name}}
              {{meet.date}}
             
                 <textarea  placeholder="Write your review" class="review-input" v-model="reviewText" name="" id="" cols="30" rows="10"  maxlength="200"></textarea>
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
   
    methods : {
        addReview(meet){
      
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
   
        this.$emit("closeThisB");
           
            
        }
    }
}
</script>

<style scoped>
.mdc-button  {
    background: #3792cb;
}

.mdc-card {
    height: 400px;
    width:900px;
    padding: 1rem;
}





</style>