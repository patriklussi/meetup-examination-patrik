<template>
  <div class="wrapper">
        
  </div>
</template>

<script>
export default {
  mounted(){
    let temp = window.localStorage.getItem("meet");
    const acutalMeets = JSON.parse(temp);
    console.log(acutalMeets);
  }
}
</script>

<style>

</style>