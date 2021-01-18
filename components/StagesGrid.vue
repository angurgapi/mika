<template>
<div class='grid'>
		<div class='square square-one'><div class="brdr"></div><p>уход</p></div>
		<div class='square square-two'></div>
		<div class='square square-three'><div class="brdr"></div><p>форма</p></div>
		<div class='square square-four'></div>
		<div class='square square-five'></div>
		<div class='square square-six'><div class="brdr"></div><p>цвет</p></div>
		<div class='square square-seven'></div>
		<div class='square square-eight'><div class="brdr"></div><p>дизайн</p></div>
</div>
</template>

<style scoped lang="sass">
.grid
  margin: 70px auto
  height: 35vw
  width: 70vw
  display: grid
  grid-template-columns: 25% 25% 25% 25%
  grid-gap: 0 
  max-width: 1280px
  margin: 0 auto

.square
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  p    
    padding-top: 20px
    font-size: 1.5rem
.brdr
    width: 45px
    border-bottom: 3px solid black

.square-one
  background-color: #e6b5b8
.square-three
  background-color: #f7d4a8
.square-six
  background-color: #ede1e6
.square-eight
  background-color: #f5c1c3
.square-two
  background-image: url('/img/1care.webp')
.square-four
  background-image: url('/img/2shape.webp')
.square-five
  background-image: url('/img/3color.webp')
.square-seven
  background-image: url('/img/4des.webp')
.square
  background-size: cover
@media(max-width: 650px)
  .grid
    height: 90vh
    width: 45vh
    grid-template-columns: 50% 50%
</style>

<script>
	export default{}
</script>