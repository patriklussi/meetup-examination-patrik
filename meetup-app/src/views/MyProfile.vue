<template>
  <div class="wrapper">
        <MyMeetList :holderArray="holderArray"/>
  </div>
</template>

<script>
import MyMeetList from "../components/MyMeetList.vue";
export default {
    components:{
      MyMeetList
    },
  data:()=>{
    return {
      holderArray:[],
    }
  },
  mounted(){
    let temp = window.localStorage.getItem("meet");
    const acutalMeets = JSON.parse(temp);
    console.log(acutalMeets);
    this.holderArray = acutalMeets;
    console.log("holder",this.holderArray);
  }
}
</script>

<style scoped>



</style>