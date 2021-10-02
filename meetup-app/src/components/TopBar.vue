<template>
  <div class="wrapper">   <header class="mdc-top-app-bar" ><p class="title">MeetUp</p> <p class="buttonOne">Meetups</p> <p @click="toggle" class="buttonTwo">My Meetups</p></header>  </div>
</template>

<script>
export default {
methods:{
    toggle(){
        
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