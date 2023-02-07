<script>
  export default{
  methods:{
    goToDayBokk(){
      this.$router.push({name:'no-entry'})
    }
  }
}
</script>

<template>
  <div class="home">
    <img src="../assets/logo.svg" alt="vue logo">
  

  <h2>Hola Mundo</h2>

  <button @click="goToDayBokk" class="btn btn-primary">
Primary
  </button>
</div>
</template>
