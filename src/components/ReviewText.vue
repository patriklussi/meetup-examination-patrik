<template>
  <div class="wrapper">

      <section>
          <article class="mdc-card mdc-card--outlined" v-for="(meet,index) in reviewArray" :key="index">
              <p class="reviewTitle">{{meet.name}}</p>
              
             
            <input id="sigmaInput" v-model="reviewText" placeholder="Write your short review"  maxlength="75" type="text">
          <button id="sigma-male" @click="addReview(meet)" class="mdc-button mdc-button--raised">Add your review</button>
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
    width:50%;
}

.mdc-card {
    height: 200px;
    width:900px;
    padding: 1rem;
    display: flex;
    align-items:center;
}

.reviewTitle {
    margin:1rem;
    font-size: 3rem;
}
input {
      width: 80%;
  padding: 8px;
  border: 1px solid rgb(156, 156, 156);
  border-radius: 4px;
  resize: vertical;
  margin-bottom: 1rem;

}





</style>