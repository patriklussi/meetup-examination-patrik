<template>

  <div class="wrapper">
      <header class="mdc-top-app-bar" ><p class="title">MeetUp</p> <p class="buttonOne">Meetups</p> <p @click="toggle" class="buttonTwo">My Meetups</p></header> 
     <section>
          <p class="main-title">Meetups in your area</p>
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
    methods: {
        toggle(){
            console.log(this.$route);
        }
    }

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

.main-title {
    font-family: 'Rubik', sans-serif;
    margin:1rem;
    font-weight: 100;
    font-size: 3rem;
}
.title {
    margin-right: auto;
    margin-left: 1rem;
}
.title:hover {
       cursor: pointer;
}
.buttonOne {
    margin-right: 1rem;
}

.buttonOne:hover {
       cursor: pointer;
}

.buttonTwo {
    margin-right: 1rem;
}

.buttonTwo:hover {
    cursor: pointer;
}
</style>