<template>


<div class="sliderBlock">
	<div class="slide" v-for="(item,i) in items" :key="i">
        <img :src="item.src"/>
        <!-- <h3>{{item.title}}</h3> -->
    </div>

    <a class="prev" @click="plusSlides(-1)">&#10094;</a>
	<a class="next" @click="plusSlides(1)">&#10095;</a>
</div>


</template>


<style lang="sass">
	@font-face
		font-family: 'Comfortaa'
		font-style: normal
		font-weight: 400
		font-display: swap
		src: url('~assets/fonts/Comfortaa-Medium.ttf') format('truetype')	  

	.sliderBlock
		overflow: hidden
		position: relative
		height: auto
		display: flex
		font-family: 'Lato', sans-serif
		font-weight: 300
		margin: 0 auto
		max-width: 900px
	
	.slide

		align-items: center
		color: #fff
		display: none		
		justify-content: center
	h3
		color: rgba(0,0,0,.4)
		z-index: 1001
		position: relative
		bottom: 0
		width: 100%
		font-family: 'Comfortaa'
		height: 40px
		text-align: center

	img
		width: 450px
		height: auto	

	.prev, .next 
		cursor: pointer
		position: absolute
		top: 50%
		width: auto
		margin-top: -22px
		padding: 16px
		color: white
		font-weight: bold
		font-size: 18px
		transition: 0.6s ease
		border-radius: 0 3px 3px 0
		user-select: none
	.next
		right: 0
		border-radius: 3px 0 0 3px

	.prev:hover, .next:hover
		background-color: grba(0,0,0,.8)

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


</style>

<script>
	export default{
		data () {
    		return {
        		items: [
          			{
		            src: 'img/nude/black.jpeg',
		            title:'нюд'
          		},
          			{
            		src: "img/nude/short.jpeg",
            		title:'короткие ногти'
          		},
          			{
            		src: "img/nude/white.jpeg",
            		title:'дизайн-элементы'
          		},
          			{
          			src: "img/nude/azure.jpg",
          			title: 'короткие ногти'
          		},
          			{
          			src: 'img/nude/french.jpeg',
          			title: "френч"	
          			}
          
        		],
        		slideIndex: 1
      		}
    	},
		methods: {
			showSlides(idx){
				let slides = document.querySelectorAll('.slide')
				if (idx > slides.length) {
					this.slideIndex = 1
				}
				if (idx < 1){
					this.slideIndex = slides.length
				}
				for (let i=0; i < slides.length; i++){
					slides[i].style.display = 'none'
				}
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