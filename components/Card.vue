<template>
	<div class='wrapper'>
		<div class="left">
			<img src='/img/call.webp' alt='phone'>
		</div>
		<div class="right">
			<h4 class="marked">запись открыта</h4>
			<p>давайте знакомиться! <br> дарю скидку <span class='marked'>30%</span> всем, кто пришел в первый раз</p>
		</div>
	</div>
</template>

<style scoped lang='sass'>
.wrapper
  margin: 70px auto
  display: flex
  flex-direction: row
  width: 80%
  box-shadow: 0 0 30px #333
.left, .right
  width: 50%
  overflow: hidden
.left
  img
    width: 100%
    height: 100%
.right
  text-transform: uppercase  
  max-height: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  font-family: 'Helvetica'
  padding: 25px
  background: #fff
  p    
    color: rgba(0,0,0,.7)
    opacity: .8
    font-size: 35px
    text-align: center
  
@media(max-width: 1000px)
  .right
    p
      font-size: 26px
    .marked
      font-size: 36px

@media(max-width: 800px)
  .wrapper
    flex-direction: column
    .left, .right
      width: 100%
    .right
      padding: 20px
      p
        font-size: 2rem
</style>

<script>
	export default{

	}
</script>