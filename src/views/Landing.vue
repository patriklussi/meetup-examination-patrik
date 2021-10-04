<template>

    <div class="wrapper">
    <TopBar/>
    <section>
    <p class="main-title">Meetups in your area</p>
    <MeetList :meetupList="meetupList"/> 
    </section>
    

  </div>
</template>

<script>
import MeetList from '../components/MeetList.vue'
import TopBar from "../components/TopBar.vue"

export default {
    name:"Landing",
    components:{
    MeetList,
    TopBar
 
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
.main-title {
    font-family: 'Rubik', sans-serif;
    margin:1rem;
    font-weight: 100;
    font-size: 3rem;
}

</style>