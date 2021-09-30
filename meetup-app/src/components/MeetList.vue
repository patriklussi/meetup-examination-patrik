<template>
  <div class="hello">
      <section class="card-container">
        <h1>Meetups in your area</h1>
        <article  class="card"  v-for="(meets,index) in meetupList" :key="index"> <h2>{{meets.name}}</h2>  <h5>{{meets.date}}</h5> <button>Sign on for meet</button></article>
      </section>
  </div>
</template>

<script>
export default {
  name: "MeetList",
  props: {
    meetupList:Array,
  }
}

</script>
https://material.io/components/cards/web#using-cards
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card {
   height: 100px;
  width: 350px;
  background:grey;
  margin:0;
  display: flex;

}
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
