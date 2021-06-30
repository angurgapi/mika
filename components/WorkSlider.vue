<template>
<div class="sliderBlock">
  <div class="prev works__prev" @click="plusSlides(-1)"> &#10094;</div>
	<div class="works__slide" v-for="(image, i) in images" :key="i">
    <img class="slide__img" :src="image.src"/>     
  </div>
  <div class="next works__next" @click="plusSlides(1)">&#10095;</div>
  
</div>
</template>

<style lang="sass">

.sliderBlock
  overflow: hidden  
  max-width: 90%
  height: auto
  display: flex  
  align-items: center
  border-radius: 5px
  &__prev, &__next
    top: 50%
.slide
  align-items: center
  color: #fff
  display: none		
  justify-content: center
  &__img
    width: 100%
    height: auto

.fade
  -webkit-animation-name: fade
  -webkit-animation-duration: 1.5s
  animation-name: fade
  animation-duration: 1.5s

@-webkit-keyframes fade
  from
    opacity: .4
  to
    opacity: 1

@keyframes fade
  from
    opacity: .4
  to
    opacity: 1

@media(max-width: 500px)
  .sliderBlock
    max-width: 100%
  .slide
    img
      max-width: 100%
</style>

<script>
	export default{
    name: 'WorkSlider',
    props: {      
      images: {
        type: Array
      }
    },
		data () {
    		return {        		
        		slideIndex: 1
      		}
    	},
		methods: {
			showSlides(idx){
				let slides = document.querySelectorAll(".works__slide")
				if (idx > slides.length) {
					this.slideIndex = 1
				}
				if (idx < 1){
					this.slideIndex = slides.length
				}
				for (let i=0; i < slides.length; i++){
					slides[i].style.display = 'none'
				}
				slides[this.slideIndex - 1].classList.add('fade')
				slides[this.slideIndex - 1].style.display = 'block'
			},

			plusSlides(idx){
				this.showSlides(this.slideIndex += idx)
			},
			currentSlide(idx){
				this.showSlides(this.slideIndex = idx)
			}
		},
		mounted() {
			this.showSlides(1)
		}


	}
</script>