<template>
  <div id="app">
   
    <TopBar :holderArray="holderArray" v-on:toggleThatB="toggle"/>

    <MeetList  v-on:deleteLs="deleteLs"  v-on:addToLs="addToLs" v-if="home" :meetupList="meetupList"/>
    <MyMeetList  v-else/>
   
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
      meetupList: [ {name:"My Hero con",date:"2019-05-20",id:1,signedup:false,review:"Add a review"},
      {name:"Comic con",date:"2021-11-21",id:2,signedup:false,review:"Add a review"},
      {name:"Twitch-con",date:"2022-06-12",id:3,signedup:false,review:"Add a review"},
      {name:"Worlds 2021",date:"2021-10-05",id:4,signedup:false,review:"Add a review"},
       {name:"Batcon",date:"2021-11-11",id:5,signedup:false,review:"Add a review"},
       {name:"Superman-con",date:"2022-01-02",id:6,signedup:false,review:"Add a review"},
       {name:"Ice cream con",date:"2022-02-13",id:7,signedup:false,review:"Add a review"},
       {name:"Chips con", date:"2023-04-21",id:8,signedup:false,review:"Add a review"} ],
      home:true,
       holderArray:[],
 
      }
  },
   mounted(){
    const storage = JSON.parse(localStorage.getItem("meet"));
    console.log(storage);

     
      if (storage !== null) {
      this.holderArray = storage;
      this.holderArray.forEach(evt => {
      const id = evt.id;
      const goingTo =  this.meetupList.find(evt => evt.id === id )
      goingTo.signedup = true
      console.log(  "going to" , goingTo);
      } ) 
     }
    },
  methods:{
    
    toggle(){
      this.home = !this.home;
    },
    addToLs(meets){
      this.holderArray.push(meets)
    window.localStorage.setItem("meet",JSON.stringify(this.holderArray));
    
    },
    deleteLs(meets){
      console.log("meets",meets);
      console.log("holderarray before",this.holderArray);
      this.holderArray = this.holderArray.filter(item => {
       return item.id !== meets.id;
      });
       window.localStorage.setItem("meet",JSON.stringify(this.holderArray));
       console.log("HOlderarray",this.holderArray);
    }
   
  }
}
</script>

<style>
body  {
  margin:0;
  background: rgb(212, 212, 212);
}



#app {

   font-family: 'Rubik', sans-serif;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  width: 100%;
}
</style>
