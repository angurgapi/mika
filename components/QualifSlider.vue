<template>
<div class="sliderBlock">
  <div class="prev qualification__prev" @click="plusSlides(-1)"> &#10094;</div>
	<div class="qualification__slide" v-for="(image, i) in images" :key="i">
    <img class="qualification__slide__img" :src="image.src"/>     
  </div>
  <div class="next qualification__next" @click="plusSlides(1)">&#10095;</div>
  
</div>
</template>

<style lang="sass">

.sliderBlock
  overflow: hidden  
  width: 100% 
  height: auto
  display: flex  
  align-items: center
  justify-content: center
  border-radius: 5px
.qualification
  &__slide
    align-items: center
    color: #fff
    display: none		
    justify-content: center
    // width: 500px
    max-width: 90%
    &__img
      width: 100%
      height: auto
      margin: auto
  &__prev, &__next 
    cursor: pointer
    position: relative
    overflow: hidden
    display: flex
    align-items: center
    justify-content: center
    z-index: 1010
    // top: 50%
    width: 35px
    height: 35px
    padding: 16px
    background-color: rgba(255, 237, 219, 0.7)  
    color: rgba(209, 75, 133, .8)
    border-radius: 50px
    font-weight: bold
    font-size: 18px
    transition: 0.6s ease
    user-select: none
  // &__prev 
  //   left: 35px
  // &__next
  //   right: 35px

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
    name: 'QualifSlider',
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
				let slides = document.querySelectorAll(".qualification__slide")
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