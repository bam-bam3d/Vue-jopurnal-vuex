<template>
  <div class="entry-container mb-3 pointer p-2"
  @click="$router.push({ name:'entry',params:{ id: 10 }})">
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">04</span>
        <span class="fx-1 fs-5">febrero</span>
        <span class="fx-2 fw-light">2023, sábado</span>
    </div>
    <div class="entry-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, numquam minima repellendus earum deleniti autem illum dolore quia aspernatur fuga?
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
        
    }
    .entry-description{
        font-size: 12px;
    }
}
</style>