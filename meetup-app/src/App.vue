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
      meetupList: [ {name:"My Hero con",date:"2022-05-20"},{name:"Comic con",date:"2021-11-21"},{name:"Twitch-con",date:"2022-06-12"},{name:"Worlds 2021",date:"2021-10-05"} ],
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
