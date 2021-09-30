<template>
  <div class="wrapper">
     <MeetList :meetupList="meetupList"/> 

  </div>
</template>

<script>
import MeetList from '../components/MeetList.vue'


export default {
    name:"Landing",
    components:{
    MeetList,
 
},
    props:{
        meetupList:Array,
    },

}
</script>

<style>

</style>