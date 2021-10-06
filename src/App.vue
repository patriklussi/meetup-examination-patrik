<template>
  <div id="app">
   
    <TopBar v-on:toggleThatB="toggle"/>
    <MeetList v-on:addToLs="addToLs" v-if="home" :meetupList="meetupList"/>
    <MyMeetList v-else/>
  </div>
</template>

<script>

import TopBar from "./components/TopBar.vue"
import MeetList from "./components/MeetList.vue";
import MyMeetList from "./components/MyMeetList.vue";
export default {
  name: 'App',
  components: {
    TopBar,
    MeetList,
    MyMeetList
  },
  data:()=>{
      return {
      meetupList: [ {name:"My Hero con",date:"2019-05-20",id:1,going:false,},
      {name:"Comic con",date:"2021-11-21",id:2,going:false},
      {name:"Twitch-con",date:"2022-06-12",id:3,going:false},
      {name:"Worlds 2021",date:"2021-10-05",id:4,going:false},
       {name:"Batcon",date:"2021-11-11",id:5,going:false},
       {name:"Superman-con",date:"2022-01-02",id:6,going:false},
       {name:"Ice cream con",date:"2022-02-13",id:7,going:false},
       {name:"Chips con", date:"2023-04-21",id:8,going:false} ],
      home:true,
       holderArray:[],
      }
  },
  methods:{
    
    toggle(){
      this.home = !this.home;
    },
    addToLs(meets){
        console.log(Date());
   
    if(this.holderArray.includes(meets)){
      console.log("this sucks");
    } else {
      this.holderArray.push(meets);
    }
    window.localStorage.setItem("meet",JSON.stringify(this.holderArray));
    
    },
    mounted(){
    const storage = JSON.parse(localStorage.meet);
      console.log(storage);
     
     
      if (storage !== null) {
      this.holderArray = storage;
      this.attending.forEach(evt => {
      const id = evt.id;
      const goingTo =  this.events.find(evt => evt.id === id )
      goingTo.going = true
      console.log(  "going to" , goingTo);
      } ) 
     }
    }
  }
}
</script>

<style>
body  {
  margin:0;
}



#app {
  font-family: 'Roboto', sans-serif;
 
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  width: 100%;
}
</style>
