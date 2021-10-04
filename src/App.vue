<template>
  <div id="app">
   
    <router-view :meetupList="meetupList"/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data:()=>{
      return {
      meetupList: [ {name:"My Hero con",date:"2022-05-20"},{name:"Comic con",date:"2021-11-21"},{name:"Twitch-con",date:"2022-06-12"},{name:"Worlds 2021",date:"2021-10-05"}, {name:"Batcon",date:"2021-11-11"},{name:"Superman-con",date:"2022-01-02"},{name:"Ice cream con",date:"2022-02-13"},{name:"Chips con", date:"2023-04-21"} ],
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
