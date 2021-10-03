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

.body {
    font-family: 'Rubik', sans-serif;
}

</style>