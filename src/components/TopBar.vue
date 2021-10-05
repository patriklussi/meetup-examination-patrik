<template>
  <header class="mdc-top-app-bar" ><p class="title">MeetUp</p> <p @click="toggleToMeetUps" class="buttonOne">Meetups</p> <p @click="toggleMyProfile()" class="buttonTwo">My Meetups</p></header>  
</template>

<script>
export default {
methods:{
    toggleMyProfile(){
       this.$emit("toggleThatB");
    },
    toggleToMeetUps(){
      this.$emit("toggleThatB");
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