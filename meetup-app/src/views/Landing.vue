<template>

  <div class="wrapper">
      <header class="mdc-top-app-bar" ><p class="">MeetUp</p> <p>Meetups</p> <p>My Meetups</p></header>
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
position: relative;
flex-direction: row;
justify-content: center;
align-items: center;
}

p {
    font-size:25px;
    margin:0;
    font-family: 'Rubik', sans-serif;
}
</style>