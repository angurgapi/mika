<template>
  <div class="carousel-wrapper">
    <VueSlickCarousel v-bind="slickOptions">
      <div v-for="i in 7" :key="i" class="img-wrapper">
        <img :src="`./img/portfolio/${i}.jpg`" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: false,
        // slidesToScroll: 1,
        variableWidth: true
      }
    }
  }
}
</script>

<style>

.img-wrapper img {
  
  height: 300px;
  width: auto;  
  background-image: linear-gradient(gray 100%, transparent 0);
}
</style>
