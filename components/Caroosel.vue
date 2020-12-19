<template>
<div class="sliderBlock">

	<agile>
        <div class="slide" v-for="(item,i) in items" :key="i">
            <img :src="item.src"/>
            <h3>{{item.title}}</h3>
        </div>
        
    </agile>
</div>
</template>

<script>
  export default {
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
          
        ],
      }
    }
    }
</script>

<style lang="sass">
	@font-face
		font-family: 'Comfortaa'
		font-style: normal
		font-weight: 400
		font-display: swap
		src: url('~assets/fonts/Comfortaa-Medium.ttf') format('truetype')	  

	.sliderBlock
		width: 100%
		height: auto
		display: flex
		font-family: 'Lato', sans-serif
		font-weight: 300
		margin: 0 auto
		max-width: 900px
		padding: 30px
		
	.agile
		width: 100%

		&__actions
			margin-top: 20px

		&__nav-button
			background: transparent
			border: none
			color: #ccc
			cursor: pointer
			font-size: 24px
			transition-duration: .3s

			&:hover
				color: #888

		&__dot
			margin: 0 10px

			button 
				background-color: #eee
				border: none
				border-radius: 50%
				cursor: pointer
				display: block
				height: 10px
				font-size: 0
				line-height: 0
				margin: 0
				padding: 0
				transition-duration: .3s
				width: 10px

			&--current,
			&:hover
				button
					background-color: #888


		.slide
			align-items: center
			color: #fff
			display: flex
			width:100%			
			justify-content: center

			h3
				font-size: 22px
				font-weight: 300
				color: rgba(0,0,0,.4)
				z-index: 1001
				position: relative
				left: 250px
				top: -200px
				font-family: 'Comfortaa'

			img
				width: 450px
				height: auto
	
</style>