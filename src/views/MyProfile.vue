<template>
  <div class="wrapper">
        <TopBar/>
        <MyMeetList :holderArray="holderArray"/>
  </div>
</template>

<script>
import MyMeetList from "../components/MyMeetList.vue";
import TopBar from "../components/TopBar.vue"
export default {
    components:{
      MyMeetList,
      TopBar,
    },
  data:()=>{
    return {
      holderArray:[],
      holderForFutureArray:[],
    }
  },
  mounted(){
    let temp = window.localStorage.getItem("meet");
    const acutalMeets = JSON.parse(temp);
    for(let item of acutalMeets){
      console.log(item);
 

   
      
    }
    console.log(acutalMeets);
    this.holderArray = acutalMeets;
    console.log("holder",this.holderArray);
  }
}
</script>

<style scoped>

.body {
    font-family: 'Rubik', sans-serif;
}
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>