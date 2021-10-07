<template>
  <header class="mdc-top-app-bar" ><p class="title">MeetUp</p> <p @click="toggleToMeetUps" class="buttonOne">Meetups</p> <p @click="toggleMyProfile()" class="buttonTwo">My Meetups</p>
    <h3>{{holderArray.length}} </h3>
  </header>

</template>

<script>
export default {
  props: {
 holderArray:Array,
  },
methods:{
    toggleMyProfile(){
       this.$emit("toggleThatB");
    },
    toggleToMeetUps(){
      this.$emit("toggleThat");
    }
}
}
</script>

<style scoped>
.mdc-top-app-bar {
height: 75px;
position: relative;
flex-direction: row;
justify-content: center;
align-items: center;
background: #3792cb;
}

p {
    font-size:25px;
    margin:0;
    font-family: 'Rubik', sans-serif;
}
h3 {
  margin-right: 1rem;
  font-size:1.5rem;
}

.title {
    margin-right: auto;
    margin-left: 1rem;
      transition: transform .1s; /* Animation */
}
.title:hover {
       cursor: pointer;
         transform: scale(1.09);
}
.buttonOne {
    margin-right: 1rem;
     transition: transform .1s; /* Animation */
}

.buttonOne:hover {
       cursor: pointer;
       transform: scale(1.09);

}


.buttonTwo {
    margin-right: 1rem;
         transition: transform .1s; /* Animation */
}

.buttonTwo:hover {
    cursor: pointer;
    transform: scale(1.09);
}
</style>