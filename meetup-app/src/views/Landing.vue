<template>

  <div class="wrapper">
      <header class="mdc-top-app-bar" >MeetUp</header>
     <section>
         <MeetList :meetupList="meetupList"/> 
     </section>
    

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

<style scoped>
.wrapper {
    margin:0;
}
.mdc-top-app-bar {
height: 75px;
}
</style>