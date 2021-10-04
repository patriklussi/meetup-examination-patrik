<template>
  <div class="wrapper">

      <section>
          <article v-for="(meet,index) in placeHolder" :key="index">
              {{meet.name}}
              {{meet.date}}
             
          </article>
      </section>

     <input v-model="reviewText" placeholder="Write your review" type="text">
     <button  @click="addReview" class="mdc-button mdc-button--raised">Add your review</button>
  </div>
</template>

<script>
export default {
    props:{
        placeHolder:Array,
    },
    data:()=>{
        return {
            reviewText:"",
        }
    },
    mounted:()=>{
        console.log("supp")
    },
    methods : {
        addReview(){
         
            for(let things of this.placeHolder) {
                things.review = this.reviewText;
                console.log(things);
               
            }
            

             window.localStorage.setItem("meet",JSON.stringify(this.placeHolder));
             this.$emit("doit");
        }
    }
}
</script>

<style scoped>
.mdc-button  {
    background: #3792cb;
}

</style>