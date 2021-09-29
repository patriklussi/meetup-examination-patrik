<template>
  <div class="wrapper">
      <MeetupList/>
  </div>
</template>

<script>
import MeetupList from '../components/MeetupList.vue'

export default {
    props:{
        meetupList:Array,
    },
component:{
    MeetupList,
}
}
</script>

<style>

</style>